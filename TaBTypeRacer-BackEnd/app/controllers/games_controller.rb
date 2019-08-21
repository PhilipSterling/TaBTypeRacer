class GamesController < ApplicationController
    def create 
        @game = Game.create(user_id: params[:user_id], challenge_id: params[:challenge_id], starttime: Time.new)
        render json: @game
    end

    def update
        @game = Game.find_by(id: params[:id])
        @game.endtime = Time.new
        @game.percentage = params[:percentage]
        @challenge = Challenge.find_by(id: @game.challenge_id)
        @numWords = @challenge.paragraph.split(" ").length
        @totalTimeInSeconds = @game.endtime - @game.starttime
        @totalMinutes = (@totalTimeInSeconds / 60)
        @wpm = @numWords / @totalMinutes
        @wpmWithPercentage = @wpm * @game.percentage
        @game.save
        render json: {wpm: @wpm.round(2), wpmPercentage: @wpmWithPercentage.round(2), percentage: @game.percentage.round(2)}
    end

    def index
        @currentUserID = request.headers['userid']
        @games = Game.all
        @games = @games.select {|game| game.endtime != nil && game.user_id == @currentUserID.to_i}
        @games = @games.map do |game| 
            dateplayed = game.starttime
            dateplayed = dateplayed.strftime("%Y-%m-%d")
            challenge = Challenge.find_by(id: game.challenge_id)
            wpm = (challenge.paragraph.split(" ").length / ((game.endtime - game.starttime) /60)).round(2)
            challengeCategory = challenge.category
            {starttime: dateplayed, wpm: wpm, category: challengeCategory, percentage: game.percentage.round(2)} 
        end
        @bestspeed = Game.bestWpm(@currentUserID)
        @averagespeed = Game.averageWpm(@currentUserID)
        @averageaccuracy = Game.averageAccuracy(@currentUserID)
        render json: {games: @games, bestspeed: @bestspeed, averagespeed: @averagespeed, averageaccuracy: @averageaccuracy}
    end
end

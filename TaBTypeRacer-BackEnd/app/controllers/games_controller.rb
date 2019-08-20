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
        render json: {wpm: @wpm.round(2), wpmPercentage: @wpmWithPercentage.round(2), percentage: @game.percentage.round(2)}
    end
end

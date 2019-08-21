class Game < ApplicationRecord
    belongs_to :user
    belongs_to :challenge

    def self.bestWpm(user_id)
        @games = Game.all
        @games = @games.select {|game| game.endtime != nil && game.user_id == user_id.to_i}
        @wpms = @games.map do |game|
            challenge = Challenge.find_by(id: game.challenge_id)
            (challenge.paragraph.split(" ").length / ((game.endtime - game.starttime) /60)).round(2)
        end
        @wpms.max
    end

    def self.averageWpm(user_id)
        @games = Game.all
        @games = @games.select {|game| game.endtime != nil && game.user_id == user_id.to_i}
        @wpms = @games.map do |game|
            challenge = Challenge.find_by(id: game.challenge_id)
            (challenge.paragraph.split(" ").length / ((game.endtime - game.starttime) /60)).round(2)
        end
        (@wpms.reduce(:+).to_f / @wpms.size).round(2)
    end

    def self.averageAccuracy(user_id)
        @games = Game.all
        @games = @games.select {|game| game.endtime != nil && game.user_id == user_id.to_i}
        @acc = @games.map do |game| 
            game.percentage
        end
        (@acc.reduce(:+).to_f / @acc.size).round(2)
    end
end

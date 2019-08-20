class GamesController < ApplicationController
    def create 
        @game = Game.create(user_id: params[:user_id], challenge_id: params[:challenge_id], starttime: time.now)
        render json: @game
    end

    def update

    end
end

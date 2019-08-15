class ChallengesController < ApplicationController

    def create
        @challenge = Challenge.create(challenge_params)
        render json: @challenge
    end

    def index
        @challenges = Challenge.all
        render json: @challenges
    end

    private

    def challenge_params
        params.require(:challenge).permit(:paragraph, :category)
    end
end

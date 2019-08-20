class ChallengesController < ApplicationController

    def create
        @challenge = Challenge.create(challenge_params)
        render json: @challenge
    end

    def show
        @challenge = Challenge.find(params[:id])
        render json: @challenge
    end

    def index
        @challenges = Challenge.all
        render json: @challenges
    end

    def achall 
        chosencategory = request.headers['categoryheader']
        @challenges = Challenge.all

        if chosencategory == "peterpan" 
            @challenges = @challenges.select {|challenge|challenge.category == "Peter Pan"}
        elsif chosencategory == "dracula" 
            @challenges = @challenges.select {|challenge|challenge.category == "Dracula"}
        end
        render json: @challenges.sample

    end

    private

    def challenge_params
        params.require(:challenge).permit(:paragraph, :category)
    end
end

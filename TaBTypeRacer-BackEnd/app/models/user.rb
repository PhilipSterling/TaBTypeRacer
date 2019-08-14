class User < ApplicationRecord
    has_many :games
    has_many :challenges, through: :games
end

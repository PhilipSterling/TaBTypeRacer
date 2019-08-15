class User < ApplicationRecord
    validates :username, uniqueness: { case_sensitive: false }
    has_secure_password
    has_many :games
    has_many :challenges, through: :games
end

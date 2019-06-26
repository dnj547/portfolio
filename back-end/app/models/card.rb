class Card < ApplicationRecord
  has_many :responses

  has_many :votes
  has_many :votes, through: :responses
end

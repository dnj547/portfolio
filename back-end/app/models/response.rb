class Response < ApplicationRecord
  has_many :votes
  belongs_to :card
end

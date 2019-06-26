class Vote < ApplicationRecord
  belongs_to :response
  belongs_to :card
end

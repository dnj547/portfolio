class CardSerializer < ActiveModel::Serializer

  attributes :id, :card_text

  has_many :responses

  has_many :votes
  has_many :votes, through: :responses

end

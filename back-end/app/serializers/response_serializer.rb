class ResponseSerializer < ActiveModel::Serializer

  attributes :id, :response_text, :card_id

  has_many :votes
  belongs_to :card

end

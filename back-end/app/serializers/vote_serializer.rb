class VoteSerializer < ActiveModel::Serializer

  attributes :id

  belongs_to :response
  belongs_to :card

end

class AddCardIdToVotes < ActiveRecord::Migration[5.2]
  def change
    add_reference :votes, :card, foreign_key: true
  end
end

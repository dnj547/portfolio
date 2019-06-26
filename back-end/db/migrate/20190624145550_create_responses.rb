class CreateResponses < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.string :response_text
      t.references :card, foreign_key: true

      t.timestamps
    end
  end
end

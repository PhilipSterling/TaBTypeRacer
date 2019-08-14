class CreateChallenges < ActiveRecord::Migration[5.2]
  def change
    create_table :challenges do |t|
      t.string :paragraph
      t.string :category

      t.timestamps
    end
  end
end

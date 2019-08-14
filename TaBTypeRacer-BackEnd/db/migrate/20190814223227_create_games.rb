class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :challenge_id
      t.decimal :percentage
      t.datetime :starttime
      t.datetime :endtime

      t.timestamps
    end
  end
end

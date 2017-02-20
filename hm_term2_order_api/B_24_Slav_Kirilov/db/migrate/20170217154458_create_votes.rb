class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :article_id
      t.integer :value
      t.timestamps null: false
    end
  end
end

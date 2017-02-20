class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :value
      t.integer :article_id
      t.timestamps
    end
  end
end

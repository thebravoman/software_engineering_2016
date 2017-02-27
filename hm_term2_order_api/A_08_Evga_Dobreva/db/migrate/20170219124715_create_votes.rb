class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |k|
      k.integer :article_id
      k.integer :value

      k.timestamps
    end
  end
end

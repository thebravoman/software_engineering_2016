class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
		t.integer :article_id
		t.integer :value
		
  		t.timestamps
    end
  end
end

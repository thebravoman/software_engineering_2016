class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.text :name
      t.integer :article_id
      t.datetime :created_at
      t.datetime :updated_at
      
      t.integer :total_score

      t.timestamps
    end
  end
end

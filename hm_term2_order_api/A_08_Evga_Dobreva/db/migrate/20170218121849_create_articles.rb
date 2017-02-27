class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |k|
      k.text :name
      k.integer :total_score
      
      k.timestamps
    end
  end
end

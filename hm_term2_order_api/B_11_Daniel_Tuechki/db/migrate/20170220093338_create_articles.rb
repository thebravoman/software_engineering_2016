class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :name
      t.float :comments_score
      t.float :votes_score
      t.float :general_score

      t.timestamps
    end
  end
end

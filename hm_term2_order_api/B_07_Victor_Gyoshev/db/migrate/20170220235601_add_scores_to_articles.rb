class AddScoresToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :comments_score, :float
    add_column :articles, :votes_score, :float
  end
end

class AddCommentsScoreToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :comments_score, :integer
  end
end

class AddCommentsScoreAndVotesScoreToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :comments_score, :real
    add_column :articles, :votes_score, :real
  end
end

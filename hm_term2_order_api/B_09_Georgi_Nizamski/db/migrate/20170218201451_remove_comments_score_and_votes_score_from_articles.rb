class RemoveCommentsScoreAndVotesScoreFromArticles < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :comments_score, :integer
    remove_column :articles, :votes_score, :integer
  end
end

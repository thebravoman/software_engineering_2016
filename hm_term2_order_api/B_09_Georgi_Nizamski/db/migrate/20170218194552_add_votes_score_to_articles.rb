class AddVotesScoreToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :votes_score, :integer
  end
end

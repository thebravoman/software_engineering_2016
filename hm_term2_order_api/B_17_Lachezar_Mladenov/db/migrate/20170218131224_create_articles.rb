class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :name
	  t.integer  "comments_score", default: 0
      t.integer  "votes_score", default: 0
      t.float "normdist", default: 0
      t.timestamps
    end
  end
end

class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
	  t.string :name
	  t.float :votes_score, default: 0
	  t.float :comments_score, default: 0
	  t.float :normdist, default: 0
      t.timestamps null: false
    end
  end
end

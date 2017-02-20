class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :comment_id
      t.integer :article_id
      t.text :content

      t.timestamps
    end
  end
end

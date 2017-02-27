class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |k|
      k.integer :comment_id
      k.integer :article_id
      k.text :content
      k.timestamps
    end
  end
end

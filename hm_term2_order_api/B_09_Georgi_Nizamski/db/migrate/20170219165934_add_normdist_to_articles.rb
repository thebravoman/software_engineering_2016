class AddNormdistToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :normdist, :real
  end
end

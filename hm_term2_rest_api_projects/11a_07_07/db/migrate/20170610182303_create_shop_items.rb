class CreateShopItems < ActiveRecord::Migration[5.1]
  def change
    create_table :shop_items do |t|
      t.string :name
      t.string :slug
      t.text :description
      t.float :price
      t.boolean :available
      t.boolean :promotion
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end

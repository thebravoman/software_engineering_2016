class AddImageToShopItems < ActiveRecord::Migration[5.1]
  def change
    add_column :shop_items, :image, :string
  end
end

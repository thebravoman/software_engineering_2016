json.extract! shop_item, :id, :name, :slug, :description, :price, :available, :promotion, :category_id, :created_at, :updated_at, :image
json.url shop_item_url(shop_item, format: :json)

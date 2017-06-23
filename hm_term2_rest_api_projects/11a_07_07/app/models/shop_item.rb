require 'carrierwave/orm/activerecord'

class ShopItem < ApplicationRecord
  has_one :category
  mount_uploader :image, ShopItemImageUploader
end

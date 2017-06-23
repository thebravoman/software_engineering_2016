class CatalogController < ApplicationController
  def view
    @shop_item = ShopItem.find_by(slug: params[:slug])
    @title = @shop_item.name
  end
end

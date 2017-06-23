class ShopItemsController < ApplicationController
  before_action :authenticate_admin!, only: [:create, :update]
  before_action :set_shop_item, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /shop_items
  # GET /shop_items.json
  def index
    if params[:slug]
      @shop_item = ShopItem.find_by(slug: params[:slug])
      if @shop_item
        render json: @shop_item
      else
        render json: { :error => 'not-found', :status => 404 }, :status => 404
      end
    else
      @shop_items = ShopItem.page(params[:page]).per(params[:per])
      render json: @shop_items
    end
  end

  def pages
    render json: { :count => ShopItem.page(params[:page]).per(params[:per]).total_pages }
  end

  # GET /shop_items/1
  # GET /shop_items/1.json
  def show
    render json: @shop_item
  end

  # POST /shop_items
  # POST /shop_items.json
  def create
    @shop_item = ShopItem.new(shop_item_params)
    @shop_item.image_data_uri = shop_item_params[:image]

    if @shop_item.save
      render :show, status: :created, location: @shop_item
    else
      render json: @shop_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shop_items/1
  # PATCH/PUT /shop_items/1.json
  def update
    if @shop_item.update(shop_item_params)
      render :show, status: :ok, location: @shop_item
    else
      render json: @shop_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shop_items/1
  # DELETE /shop_items/1.json
  def destroy
    @shop_item.destroy
    render json: {}
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_shop_item
    @shop_item = ShopItem.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def shop_item_params
    params.require(:shop_item).permit(:name, :slug, :description, :price, :available, :promotion, :category_id, :image)
  end
end

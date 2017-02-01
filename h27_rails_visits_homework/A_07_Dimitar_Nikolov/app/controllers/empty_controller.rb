class EmptyController < ApplicationController
  def index
    render json: {}
  end
end

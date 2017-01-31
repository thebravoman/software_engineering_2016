class VisitsController < ApplicationController
  def index
    @vis = Visit.all
  end

  def show
    if !Visit.exists?(params[:user])
      @vis = create
    end
      @vis = Visit.find(params[:user])
        @json_res = {"count": @vis.visited}.to_json
        respond_to do |format|
          format.json {render :json => @json_res}
        end
      #tuka trqbwa da kaja izri4no da e json i show.html trqbwa da go mahna
  end
  def create
    if Visit.exists?(params[:user])
      @vis = Visit.find(params[:user])
      @vis.visited += 1
    else
      @vis = Visit.new
      @vis.id = params[:user]
      @vis.user = params[:user]
      @vis.visited = 1
    end
    @vis.save
  end
  #protect_from_forgery with: :exception
  skip_before_filter  :verify_authenticity_token
end

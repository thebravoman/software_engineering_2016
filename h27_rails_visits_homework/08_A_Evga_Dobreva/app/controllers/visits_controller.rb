class VisitsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  def get_visits
    puts '----------------------------------------------'
    @user = Visit.find_or_initialize_by(:user_id => params[:user].to_s)
    puts @user
    if @user.persisted?
      render :json => {'count' => @user[:number_of_views]}
    else
      render :json => {'count' => 0}
    end
  end

  def add_visit
    @user = Visit.find_or_initialize_by(user_id: params[:user].to_s)
    if @user.persisted?
      @user[:number_of_views] += 1
      @user.save
    else
      @u = Visit.new
      @u[:user_id] = params[:user].to_s
      @u[:number_of_views] = 1
      @u.save
    end
  end
end

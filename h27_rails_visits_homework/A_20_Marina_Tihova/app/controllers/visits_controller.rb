class VisitsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def get_id
    user_id = params[:user]

    if Visit.exists?(user_id)
      @curr_visitor = Visit.find(user_id)
      render :json => {"count" => @curr_visitor.count}, content_type: "application/json"
    else
      render :json => {"count" => 0}, content_type: "application/json"
    end
  end

  def post_id
    user_id = params[:user]

    if !Visit.exists?(user_id)
      @curr_visitor = Visit.new(:user_id => user_id, :count => 0)
      @curr_visitor.id = user_id
    else
      @curr_visitor = Visit.find(user_id)
    end

    @curr_visitor.increment_counter
    @curr_visitor.save

  end
end

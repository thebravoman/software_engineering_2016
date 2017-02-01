class VisitsController < ApplicationController
  before_action :find_visit

  def index
    render_visit
  end

  def increment
    @visit.increment_count.save
    render_visit
  end

  private

  def find_visit
    @visit = Visit.find_or_create_by(:user => params[:user])
  end

  def render_visit
    render json: @visit.to_public_hash
  end
end

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  rescue_from PG::ForeignKeyViolation do |exception|
    render json: { :error => exception.message, :status => 412 }, status: 412
  end
end

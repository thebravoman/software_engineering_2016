Rails.application.routes.draw do

  get '/visits' => "visits#get_id"
  post '/visits' => "visits#post_id"

  root "visits#index"
end

Rails.application.routes.draw do
  root 'visits#index'
  get '/visits' => 'visits#index'
  post '/visits' => 'visits#visit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

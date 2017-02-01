Rails.application.routes.draw do
  get '/visits', to: 'visits#get_visits'
  post '/visits', to: 'visits#add_visit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

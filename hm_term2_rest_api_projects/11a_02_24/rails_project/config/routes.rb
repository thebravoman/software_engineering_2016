Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/cars', to: 'cars#index'
  get '/' , to: 'cars#index'
  get '/cars/:id', to: 'cars#show' 
  get '/cars/manufacturers/', to: 'cars#get_manufacturers'
  get '/cars/:manufacturer', to: 'cars#get_by_manufacturer'
  post '/cars', to: 'cars#create'
  delete '/cars/:id', to: 'cars#destroy'
  put '/cars/:id' , to: 'cars#update'
end

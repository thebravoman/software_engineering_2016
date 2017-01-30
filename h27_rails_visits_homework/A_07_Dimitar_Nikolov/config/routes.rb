Rails.application.routes.draw do
  get '/', to: 'empty#index'

  get '/visits', to: 'visits#index'
  post '/visits', to: 'visits#increment'
end

Rails.application.routes.draw do

  #get 'visit/index'
  post '/visits' => 'visits#create'
  #get '/visits/index' => 'visits#index'
  get '/visits' => 'visits#show'
  #root 'welcome#index'
  root 'visits#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

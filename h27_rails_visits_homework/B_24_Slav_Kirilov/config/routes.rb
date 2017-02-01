Rails.application.routes.draw do
  get '/visits' => 'visitors#show'
  post '/visits' => 'visitors#create'
  root 'welcome#index'
end

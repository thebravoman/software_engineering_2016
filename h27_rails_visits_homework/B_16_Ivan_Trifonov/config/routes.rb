Rails.application.routes.draw do

get '/visits'=>'viditors#show'
post '/visits'=>'viditors#create'
end

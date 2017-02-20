Rails.application.routes.draw do

get '/visits' => 'visits#show_user'
post '/visits' => 'visits#count'

end

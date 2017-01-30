Rails.application.routes.draw do
	get '/visits', to: 'visits#stats'
	post '/visits', to: 'visits#create'
end

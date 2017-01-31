Diamorph::Application.routes.draw do
	get '/visits', to: 'visits#get_visits'
	post '/visits', to: 'visits#add_visit'
end

Rails.application.routes.draw do
	resources :user
	get '/visits'  => 'visits#show'
	post '/visits' => 'visits#add'
	root 'visits#index'
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	#resources :visits
	root 'visits#index'
	get '/visits', to: 'visits#index'
 	post '/visits', to: 'visits#create'
end

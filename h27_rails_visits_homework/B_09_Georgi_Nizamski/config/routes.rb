Rails.application.routes.draw do
   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	get '/', to: 'visits#index'

	get '/visits', to: 'visits#show'
	post '/visits', to: 'visits#create'
end

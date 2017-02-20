Rails.application.routes.draw do
	resources :articles, :only => [:index, :show, :create] do
		resources :comments, :only => [ :index ]
		resources :votes, :only => [ :index ]
	end
	post '/comments' => 'comments#create'
	get '/comments' => 'comments#index'
	get '/comments/:id' => 'comments#show'
	post '/votes' => 'votes#create'
	get '/votes' => 'votes#index'
	get '/votes/:id' => 'vote#show'
	#get '/articles/:id?order=normdist' => 'vote#show_one'
	#get '/articles?order=normdist' => 'vote#show_all'
end

Rails.application.routes.draw do
	
	post '/articles' => 'article#create'
	get '/articles' => 'article#index'
	get '/articles/:id' => 'article#show'
	
	get '/articles/:id?order=normdist' => 'article#show'
	get '/articles?order=normdist' => 'article#index'
	
	post '/comments' => 'comment#create'
	get '/comments' => 'comment#index'
	get '/articles/:id/comments' => 'comment#index'
	get '/comments/:id' => 'comment#show'
	
	post '/votes' => 'vote#create'
	get '/votes' => 'vote#index'
	
end

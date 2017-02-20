Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	root :to => "application#index"
	
	post '/articles' => "articles#create"

	get '/articles' => "articles#show"

	get '/articles/:id' => "articles#show_by_id"


	post '/comments' => "comments#create"
	
	get '/comments' => "comments#show"

	get '/comments/:id' => "comments#show_by_id"

	get '/articles/:id/comments' => "comments#comments_for_article"

	
	post '/votes' => "votes#create"
	
	get '/votes' => "votes#show"


end

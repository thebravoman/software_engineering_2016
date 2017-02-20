Rails.application.routes.draw do
	
	get '/articles', to: 'articles#index'
	post '/articles', to: 'articles#create'
	get '/articles/:id' , to: 'articles#get_article'

	get '/comments', to: 'comments#index'
	post '/comments', to: 'comments#create'
	get '/comments/:id' , to: 'comments#get_comment'
	get '/articles/:id/comments' , to: 'comments#sort'

	get '/votes' , to: 'votes#index'
	post '/votes', to: 'votes#create'
	

end

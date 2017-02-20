Rails.application.routes.draw do
	#get '/articles/:id/comments' => 'commenst#list_comm'
	post '/articles' => 'articles#create'
	get '/articles/:id' => 'articles#pasta'
	get '/articles' => 'articles#index'
	#comments
	post '/comments' => 'comments#create'
	get '/comments/:id' => 'comments#see'
	get '/comments' => 'comments#list'
	get '/articles/:id/comments' => 'comments#list_comm'
	#Votes
	post '/votes' => 'votes#votes'
	get '/votes' => 'votes#sort'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
	get '/articles', to: 'articles#all'
	get '/articles/:id', to: 'articles#find'
	post '/articles', to: 'articles#create'
	post '/comments', to: 'comments#create'
	get '/comments/:id', to: 'comments#find'
	get '/comments', to: 'comments#all'
	get '/articles/:id/comments', to: 'comments#from_article'
	post '/votes', to: 'votes#cast'
	get '/votes', to: 'votes#all'
	get '/articles/:id?order=normdist', to: 'articles#find_normdist'
	get '/articles?order=normdist', to: 'articles#all_sort'
end

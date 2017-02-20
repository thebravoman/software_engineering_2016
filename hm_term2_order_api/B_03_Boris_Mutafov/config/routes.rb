Rails.application.routes.draw do
   post '/articles' => 'articles#create'
   get '/articles/:id' => 'articles#getid'
   get '/articles' => 'articles#getArticle'
   get '/articles/:id/comments' => 'articles#articleComms'
   post '/comments' => 'articles#addComment'
   get '/comments/:id' => 'articles#getComId'
   get '/comments' => 'articles#getAllComs'
   post '/votes' => 'articles#votes'
   get '/votes' => 'articles#getVotes'
   #get '/articles/:id?order=normdist' => 'articles#normdist'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

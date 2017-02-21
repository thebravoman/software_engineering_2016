Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/articles' => 'articles#create'
  get '/articles/:id' => 'articles#show'
  get '/articles' => 'articles#show'
  get '/articles/:id/comments' => 'comments#commentshow'
  post '/comments' => 'comments#create'
  get '/comments/:id' => 'comments#show'
  get '/comments' => 'comments#show'
  post '/votes' => 'votes#create'
  get '/votes' => 'votes#show'
  get '/articles/:id?order=normdist' => 'articles#showfull'
  get '/articles?order=normdist' => 'articles#showfull'
end

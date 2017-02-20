Rails.application.routes.draw do
  resources :votes
  resources :comments
  resources :articles

  get '/articles/:id/comments' => 'articles#get_comments'
  get '/articles/:id?order=normdist' => 'articles#get_score'
  get '/articles?order=normdist' => 'articles#sort_by_score'
end

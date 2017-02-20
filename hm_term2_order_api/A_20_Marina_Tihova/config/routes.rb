Rails.application.routes.draw do
  resources :articles
  resources :comments
  resources :votes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/articles/:id/comments' => 'articles#all_article_comments'
  get '/articles/:id?order=normdist' => 'article#score'
  get '/articles?order=normdist' => 'article#sort_by_score'
end

Rails.application.routes.draw do
  resources :votes
  resources :comments
  resources :articles
  get "/articles/:id/comments" => "articles#show_comments"
  get "/articles/:id?order=normdist" => "articles#id_order"
  get "/articles/?order=normdist" => "articles#order"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

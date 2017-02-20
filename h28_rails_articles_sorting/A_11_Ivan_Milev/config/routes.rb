Rails.application.routes.draw do
    post '/articles' => 'articles#create'
    get '/articles' => 'articles#show'
    get '/articles/:id' => 'articles#index'
    get '/articles/:id/comments' => 'articles#show_comments'
    post '/comments' => 'comments#create'
    get '/comments' => 'comments#show'
    get '/comments/:id' => 'comments#index'
    post '/votes' => 'article_votes#create'
    get '/votes' => 'article_votes#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

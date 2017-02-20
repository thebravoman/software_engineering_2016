Rails.application.routes.draw do
  resources :votes
  resources :comments
  resources :articles do
    resources :comments, shallow: true do
      root to: 'comments#show_article_comments'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

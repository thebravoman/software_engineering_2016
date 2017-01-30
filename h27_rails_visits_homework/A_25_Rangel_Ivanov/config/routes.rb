Rails.application.routes.draw do
  resources :widgets

  root 'welcome#index'

  match '/widgets',  to: 'widgets#show', via: 'get'
  match '/widgets' => 'widgets#create', via: :post

end

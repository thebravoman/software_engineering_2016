Rails.application.routes.draw do
  namespace :administration do
    get '/add', to: 'administration#add'
  end

  namespace :administration do
    get '/update', to: 'administration#update'
  end

  devise_for :admins, path: 'auth', path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      password: 'secret',
      confirmation: 'confirm'
  }

  resources :categories
  root 'pages#home'

  scope '/api' do
    get 'shop_items/pages', to: 'shop_items#pages'
    resources :shop_items
    resources :categories
  end

  get 'catalog/view/:slug', to: 'catalog#view'
end

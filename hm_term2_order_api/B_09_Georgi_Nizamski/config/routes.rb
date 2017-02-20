Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	get "/", to: "articles#welcome"  

	resources :articles, only: [:create, :show, :index] do 
		resources :comments, only: [:index]
  		resources :votes
	end

  #Comments
	resources :comments, only: [:create, :show, :index]
	
  #Votes
	resources :votes, only: [:create, :index]	
end

Rails.application.routes.draw do
  root 'api/v1/home#index'


  get '/signup', to: 'users#new', as: 'signup'
  get '/signin', to: 'sessions#new', as: "signin"
  post '/signin', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: "logout"
    
  get '/auth/:provider/callback', to: 'sessions#create'

  resources :users

  namespace :api do
    namespace :v1 do
      resources :soupkitchens do 
        resources :comments
      end
    end 
  end 


  resources :foodpantries do 
    resources :comments
  end 
  
  # resources :food_pantries do 
  #   resources :comments
  # end
end

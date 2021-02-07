Rails.application.routes.draw do
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#destroy'
  
  get '/get_current_user', to: 'current_user#index'

  resources :users
  post '/user', to: 'users#create'
  get '/users', to: 'users#index'
  get '/user', to: 'users#show'
  
  resources :talents

  
  resources :agents

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

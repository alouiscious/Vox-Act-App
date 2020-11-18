Rails.application.routes.draw do
  resources :users
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get 'get_current_user', to: 'sessions#get_current_user'
  
  post '/user', to: 'users#create'
  get '/users', to: 'users#index'
  get '/user', to: 'users#show'

  resources :talents
  post '/talent', to: 'talents#create'
  get '/talents', to: 'talents#index'
  get '/talent', to: 'talents#show'
  
  resources :agents

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get 'get_current_user', to: 'sessions#get_current_user'
  resources :secrets
  resources :talents
  resources :agents
  resources :clients
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

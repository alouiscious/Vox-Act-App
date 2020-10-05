Rails.application.routes.draw do
  resources :users
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#delete'
  get 'get_current_user', to: 'sessions#get_current_user'
  resources :clients
  post '/client', to: 'clients#create'
  resources :talents
  resources :agents
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

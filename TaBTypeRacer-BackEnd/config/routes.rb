Rails.application.routes.draw do
  resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
  resources :games
      get '/challenges/random', to: 'challenges#achall'
  resources :challenges
end

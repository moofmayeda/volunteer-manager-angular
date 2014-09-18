Rails.application.routes.draw do
  root :to => "application#index"

  resources :events, except: :edit
  resources :organizers, only: [:new, :create]
  resources :volunteers, except: :edit
  resources :sessions, only: [:new, :create, :destroy]
end

# frozen_string_literal: true

Rails.application.routes.draw do
  root to: "application#show"
  mount ActionCable.server => "/cable"
end

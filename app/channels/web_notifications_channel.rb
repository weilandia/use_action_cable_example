# frozen_string_literal: true

class WebNotificationsChannel < ApplicationCable::Channel
  def subscribed
    stream_from("web_notifications:app")
  end
end

# frozen_string_literal: true

class ExampleJob < ApplicationJob
  queue_as :default

  def perform
    WebNotificationsChannel.broadcast_to(
      "app",
      action: "example"
    )
  end
end

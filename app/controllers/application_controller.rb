# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def show
    ExampleJob.set(wait_until: 5.seconds.from_now).perform_later

    render html: "", layout: true
  end
end

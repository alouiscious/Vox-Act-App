class ApplicationController < ActionController::API
  include ::ActionController::Cookies
    
  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_token(jwt)
  end
  
  # helper_method :current_user
  def current_user
    if cookies.signed[:jwt] 
      # byebug
      # encoded = cookies.signed[:jwt][:value]
      decoded = decode_token(cookies.signed[:jwt])
      # puts decode_token(encoded)

      @current_user ||= User.find_by_id(decoded["id"]) 
    end
  end

  def logged_in?
    !!current_user
  end

  def encode_token(payload)
    JWT.encode(payload, Rails.application.credentials.config[:secret_key_base])
  end

  def decode_token(token)
    JWT.decode(token, Rails.application.credentials.config[:secret_key_base])[0]
  end
end

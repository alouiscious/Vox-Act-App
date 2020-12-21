class ApplicationController < ActionController::API
  include ::ActionController::Cookies
    
  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
    # decode_token(jwt)
  end
  
  # helper_method :current_user
  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id]) 
    end
  end

  def logged_in
    !!current_user
  end

  def encode_token(payload)
    # JWT.encode(payload, "super secret")
    JWT.encode(payload, `{Rails.application.credentials.config[:secret_key_base]}`)
  end

  def decode_token(token)
    # JWT.decode(token, encode_token)
    JWT.decode(token, "Rails.application.credentials.config[:secret_key_base]")[0]
  end
end

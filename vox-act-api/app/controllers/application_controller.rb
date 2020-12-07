class ApplicationController < ActionController::API
  include ::ActionController::Cookies
  
  # console.table
  
  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
  end
  
  # helper_method :current_user
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  # def logged_in?
  #   !!current_user
  # end

  def encode_token(payload)
    JWT.encode(payload, "super secret")
  end

  # def decode_token()

  # end
end

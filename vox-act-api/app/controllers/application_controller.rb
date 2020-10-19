class ApplicationController < ActionController::API
  include ::ActionController::Cookies
  
  def authenticate_user
    jwt = cookies.signed[:jwt]
    decode_jwt(jwt)
  end
  
  def current_user

  end

  def logged_in?

  end

  def encode_token(payload)
    JWT.encode(payload, "super secret")
  end

  # def decode_token

  # end
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :user_name, :hometown, :upid, :upph
  # attribute :upph do 
  #   object.user.upph
  # end
end

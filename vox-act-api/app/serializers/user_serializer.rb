class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :user_name, :hometown, :upid, :upph
end

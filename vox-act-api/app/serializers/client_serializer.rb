class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :hometown, :email, :password, :cpid, :photo
end

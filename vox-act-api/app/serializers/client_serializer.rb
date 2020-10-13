class ClientSerializer < ActiveModel::Serializer
  attributes :id, :client_name, :hometown, :email, :password, :cpid, :photo
end

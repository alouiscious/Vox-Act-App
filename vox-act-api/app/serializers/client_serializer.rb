class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :hometown, :email
end

class TalentSerializer < ActiveModel::Serializer
  attributes :id, :talent_style, :title, :description, :phmf, :vimf, :aumf
  attribute :user_name do 
    object.user.user_name
  end
  attribute :upid do 
    object.user.upid
  end
end

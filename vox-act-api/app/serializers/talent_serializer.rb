class TalentSerializer < ActiveModel::Serializer
  attributes :id, :talent_style, :user_name, :upid, :title, :description, :phmf, :vimf, :aumf
end

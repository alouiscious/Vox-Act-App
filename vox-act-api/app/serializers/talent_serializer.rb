class TalentSerializer < ActiveModel::Serializer
  attributes :id, :talent_style, :user_name, :upid, :title, :description, :media_URL, :phmf, :vimf, :aumf
end

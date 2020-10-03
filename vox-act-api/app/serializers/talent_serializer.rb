class TalentSerializer < ActiveModel::Serializer
  attributes :id, :talent_style, :client_name, :client_id, :title, :media_URL, :mfid
end

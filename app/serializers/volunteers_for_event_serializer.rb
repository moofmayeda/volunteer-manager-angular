class VolunteersForEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :email

  has_many :events, embed: :ids
end

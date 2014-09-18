class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date
  has_many :volunteers, serializer: VolunteersForEventSerializer
  embed :ids, include: true

end

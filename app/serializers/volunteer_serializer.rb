class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :email
  has_many :events, serializer: EventsForVolunteerSerializer
  embed :ids, include: true

end

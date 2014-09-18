class EventsForVolunteerSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date

  has_many :volunteers, embed: :ids
end

class SoupkitchenSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :zipcode, :notes
  has_many :comments
  
  has_many :users, through: :comments
end

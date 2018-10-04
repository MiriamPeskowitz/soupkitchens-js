class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :about_me, :password_digest

  has_many :comments
  has_many :soupkitchens, through: :comments
end

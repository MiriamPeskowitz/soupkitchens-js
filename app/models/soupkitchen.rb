class Soupkitchen < ApplicationRecord

  has_many :comments
  accepts_nested_attributes_for :comments ,reject_if: :all_blank, :allow_destroy => true 
  has_many :users, through: :comments

end

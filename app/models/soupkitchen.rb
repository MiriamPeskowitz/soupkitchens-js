class Soupkitchen < ApplicationRecord

  has_many :comments
  accepts_nested_attributes_for :comments,  :allow_destroy => true 
  # has_many :users, through: :comments

end
# reject_if: :all_blank, -- can be put back into accepts etc, after :comments,
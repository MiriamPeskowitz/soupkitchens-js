class Comment < ApplicationRecord

  # belongs_to :user
  belongs_to :soupkitchen
  # belongs_to :foodpantry
  validates_presence_of :title, :content
  
end

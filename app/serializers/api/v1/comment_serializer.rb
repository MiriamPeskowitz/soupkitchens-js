class api::v1::CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :soupkitchen_id, :user_id

  belongs_to :user
  belongs_to :soupkitchen
  belongs_to :foodpantry
end

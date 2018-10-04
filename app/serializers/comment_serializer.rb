class CommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :soupkitchen_id, :user_id

  belongs_to :user
  belongs_to :soupkitchen
end

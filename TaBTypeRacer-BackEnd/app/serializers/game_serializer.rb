class GameSerializer < ActiveModel::Serializer
  attributes :id, :user, :challenge, :percentage
end

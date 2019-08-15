class GameSerializer < ActiveModel::Serializer
  attributes :id, :user, :challenge, :percentage, :starttime, :endtime
end

json.array!(@pipeables) do |pipeable|
  json.extract! pipeable, :id, :name, :description, :state, :state_id
  json.url pipeable_url(pipeable, format: :json)
end

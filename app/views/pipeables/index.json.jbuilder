json.array!(@pipeables) do |pipeable|
  json.extract! pipeable, :id, :name, :description, :state
  json.url pipeable_url(pipeable, format: :json)
end

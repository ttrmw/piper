# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ipsum_text = "Jerky biltong pork chop tail landjaeger fatback capicola sausage pancetta ball tip strip steak turducken salami kevin leberkas. Biltong porchetta ribeye salami leberkas, bacon meatloaf brisket corned beef drumstick sausage kevin venison ground round short ribs. Ham hock boudin tongue kielbasa pork loin flank. Porchetta venison chuck drumstick picanha strip steak meatloaf turkey kielbasa jerky. Kevin prosciutto meatball corned beef landjaeger pork."


15.times do |i|
  slice_bounds = [rand(ipsum_text.size), rand(ipsum_text.size)].sort

  Pipeable.create! name:        "#{i}th pipeable",
                   description: ipsum_text.slice(*slice_bounds),
                   state:       rand( Pipeable.states.max_by { |k, v| v }[1] + 1 )
end

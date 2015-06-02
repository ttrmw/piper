class Pipeable < ActiveRecord::Base
  enum state: { created: 0, potential: 1, likely: 2, confirmed: 3, delivered: 4, invoiced: 5 }
end

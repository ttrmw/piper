class Pipeable < ActiveRecord::Base
  enum state: { lead: 0, thirty: 1, fifty: 2, eighty: 3, closed: 4 }
end

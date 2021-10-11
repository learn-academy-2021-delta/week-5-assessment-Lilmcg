# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def finder(array, letter_word)
  array.select { |string| string.include? (letter_word) }
end

p finder(beverages_array, letter_o)
p finder(beverages_array, letter_t)

# array will pass each string from the array to the block in each iteration
# use .select method to iterate on an array and return an array of all values that evaluate as true given a block of code string.include?(letter_word) will be looked at
# if it returns true, then return the string and place in an a temporay array, else do not
# once all iterations on the original array, then all selected strings from each block execution (being stored in temporary array) that array of selected strings will be returned

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_numbers(array)
  array.sum
end

p sum_numbers(nums_array1)
p sum_numbers(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def get_model
    @model = 'Trek'
  end
  def bike_info
    "The #@model bike has #@wheels wheels and is going #@current_speed mph"
  end
end

bike_one = Bike.new
bike_one.get_model
p bike_one.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model, wheels=2, current_speed=0)
      @model = model
      @wheels = wheels
      @current_speed = current_speed
  end
  def get_model
      @model = 'Trek'
  end
  def bike_info
      "The #@model bike has #@wheels wheels and is going #@current_speed mph"
  end
  def pedal_faster(increase_speed)
      @current_speed += increase_speed
  end
  def brake(reduce_speed)
      if reduce_speed > @current_speed
          @current_speed = 0
      else
          @current_speed -= reduce_speed
      end
  end
end

bike_one = Bike.new("Trek", 2, 0)
bike_one.get_model
bike_one.bike_info

p bike_one.pedal_faster(10)
p bike_one.pedal_faster(10)
p bike_one.brake(25)

# After I added and defined the values for wheels and current_speed in my initialize code line, it messed up line 94 and the error message was "wrong number of arguments". It was expecting 3 arguments after Bike.new  I already defined 'Trek' as the model within my get_model method (in question 3a), so now I am forced to pass 'Trek' (model) once again, along with the other 2 arguments (wheels and current_speed) after Bike.new. Having the argument 'Trek' in both the get_model method and passing it through after Bike.new is probably not the best way to do this, but I'm leaving it this way in case it's actually ok to write the code like this.

# Below is the code that is not dynamic since I passed in the arguments within my methods, rather than in my last 3 lines of code. I left it here for historical purposes...

# class Bike
#   attr_accessor :model, :wheels, :current_speed
#   def initialize
#     @model = model
#     @wheels = 2
#     @current_speed = 0
#   end
#   def get_model
#     @model = 'Trek'
#   end
#   def pedal_faster
#     @current_speed += 10
#   end
#   def brake
#     @current_speed = -25
#     if @current_speed < 0
#       @current_speed = 0
#     end
#   end
#   def bike_info
#     "The #@model bike has #@wheels wheels and is going #@current_speed mph"
#   end
# end
#
# bike_one = Bike.new
# bike_one.get_model
# bike_one.bike_info
# p bike_one.pedal_faster
# p bike_one.pedal_faster
# p bike_one.brake

# output in terminal:
# 10
# 20
# 0

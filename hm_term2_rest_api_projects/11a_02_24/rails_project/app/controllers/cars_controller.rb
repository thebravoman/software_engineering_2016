class CarsController < ApplicationController

	skip_before_action :verify_authenticity_token


	def create
		j = JSON.parse(request.raw_post)
		@car = Car.new
		@car[:manufacturer] = j['Manufacturer']
		@car[:carmodel] = j['Model']
		@car[:fueltype] = j['Fuel_type']
		@car[:fuelconsumption] = j['Fuel_consumption']
		@car[:cylinders] = j['Number_of_cylinders']
		@car[:capacity] = j['Engine_capacity']
		@car[:valves] = j['Number_of_valves']
		@car[:compression] = j['Compression Ratio']
		@car[:maximumspeed] = j['Maximum_speed']
		@car[:horsepower] = j['Horse_power']
		@car.save
		render :json =>
			{
				"id" => @car[:id],
				"manufacture" => @car[:manufacturer],
				"model" => @car[:carmodel],
				"fueltype" => @car[:fueltype],
				"fuelconsumption" => @car[:fuelconsumption],
				"cylinders" => @car[:cylinders],
				"capacity" => @car[:capacity],
				"valves" => @car[:valves],
				"compression" => @car[:compression],
				"maximumspeed" => @car[:maximumspeed],
				"horsepower" => @car[:horsepower]
			}, :status => 201

	end
	def index
			#arr = Car.all.page(params[:page])
			@cars = Car.all.page(params[:page])
			#@cars = Car.where(nil)
			 @cars = @cars.manufacturer(params[:manufacturer]) if params[:manufacturer].present?
			 @cars = @cars.fueltype(params[:fueltype]) if params[:fueltype].present?
			 @cars = @cars.carmodel(params[:carmodel]) if params[:carmodel].present?
			 @cars = @cars.fuelconsumption(params[:fuelconsumption]) if params[:fuelconsumption].present?
			 @cars = @cars.cylinders(params[:cylinders]) if params[:cylinders].present?
			 @cars = @cars.capacity(params[:capacity]) if params[:capacity].present?
			 @cars = @cars.valves(params[:valves]) if params[:valves].present?
			 @cars = @cars.compression(params[:compression]) if params[:compression].present?
			 @cars = @cars.maximumspeed(params[:maximumspeed]) if params[:maximumspeed].present?
			 @cars = @cars.horsepower(params[:horsepower]) if params[:horsepower].present?



			 if @cars.any?
				 render :json => @cars
			 else
				 render :nothing => true, :status => 400
			 end
	end

	def get_by_manufacturer
			arr = Car.all
			result = []

			arr.all.where("manufacturer = ?", params[:manufacturer]).each do |car|
				result << car
			end
			render :json => result


	end

	def get_manufacturers
		arr = Car.all
		result = []

		arr.each do |car|
			if !result.include? car[:manufacturer]
				result << car[:manufacturer]
			end

		end

		render :json => result
	end

	def update
		@car = Car.find_or_initialize_by(id: params[:id])

		if @car.persisted?
			j = JSON.parse(request.raw_post)
			@car[:manufacturer] = j['Manufacturer']
			@car[:carmodel] = j['Model']
			@car[:fueltype] = j['Fuel_type']
			@car[:fuelconsumption] = j['Fuel_consumption']
			@car[:cylinders] = j['Number_of_cylinders']
			@car[:capacity] = j['Engine_capacity']
			@car[:valves] = j['Number_of_valves']
			@car[:compression] = j['Compression Ratio']
			@car[:maximumspeed] = j['Maximum_speed']
			@car[:horsepower] = j['Horse_power']
			@car.save
			render :json =>
				{
					"id" => @car[:id],
					"manufacture" => @car[:manufacturer],
					"model" => @car[:carmodel],
					"fueltype" => @car[:fueltype],
					"fuelconsumption" => @car[:fuelconsumption],
					"cylinders" => @car[:cylinders],
					"capacity" => @car[:capacity],
					"valves" => @car[:valves],
					"compression" => @car[:compression],
					"maximumspeed" => @car[:maximumspeed],
					"horsepower" => @car[:horsepower]
				}
		else
			render :json => {}, :status => 404
		end

	end

	def destroy
		@car = Car.find_or_initialize_by(id: params[:id])

		if @car.persisted?
		render :json =>
			{
				"id" => @car[:id],
				"manufacture" => @car[:manufacturer],
				"model" => @car[:carmodel],
				"fueltype" => @car[:fueltype],
				"fuelconsumption" => @car[:fuelconsumption],
				"cylinders" => @car[:cylinders],
				"capacity" => @car[:capacity],
				"valves" => @car[:valves],
				"compression" => @car[:compression],
				"maximumspeed" => @car[:maximumspeed],
				"horsepower" => @car[:horsepower]
			}, :status => 204

		else
			render :json => {}, :status => 404
		end
		@car.destroy

	end

	def show
			@car = Car.find_or_initialize_by(id: params[:id])


		if @car.persisted?
		render :json =>
			{
				"id" => @car[:id],
				"manufacture" => @car[:manufacturer],
				"model" => @car[:carmodel],
				"fueltype" => @car[:fueltype],
				"fuelconsumption" => @car[:fuelconsumption],
				"cylinders" => @car[:cylinders],
				"capacity" => @car[:capacity],
				"valves" => @car[:valves],
				"compression" => @car[:compression],
				"maximumspeed" => @car[:maximumspeed],
				"horsepower" => @car[:horsepower]
			}

		else
			render :json => {}, :status => 400
		end
	end





end

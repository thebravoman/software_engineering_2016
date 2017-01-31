class VisitsController < ApplicationController
    def get_id
        if !Visits.exists?(params[:user])
            render :text => "No such id"
        else
            @curr_id = Visits.find(params[:user])
        end
    end

    def post_id
        user_id = params[:user]

        if !Visits.exists?(user_id)
            @curr_id = Visits.new
            @curr_id.user_id = user_id
        else
            @curr_id = Visits.find(user_id)
        end

        @curr_id.increase_counter
        @curr_id.save
    end
end

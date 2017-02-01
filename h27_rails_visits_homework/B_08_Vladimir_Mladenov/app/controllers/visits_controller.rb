class VisitsController < ApplicationController
    def get_id
        if !Visits.exists?(params[:user])
            render :json => {"count": 0}, content_type: "application/json"
        else
            @curr_id = Visits.find(params[:user])
            render :json => {"count": @curr_id.count}, content_type: "application/json"
        end
    end

    def post_id
        user_id = params[:user]

        if !Visits.exists?(user_id)
            @curr_id = Visits.new(:id => user_id, :count => 0)
        else
            @curr_id = Visits.find(user_id)
        end

        @curr_id.increase_counter
        @curr_id.save
    end
end

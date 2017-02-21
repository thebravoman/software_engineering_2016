class VotesController < ApplicationController

    def show
        render json: Vote.order(:created_at), only: [:article_id, :value, :id]
    end

    def create
        if !(params[:article_id].blank? || params[:value].blank?)
            if Article.where(id: params[:article_id]).empty?
                render text: "Article doesn't exist"
            else
                Vote.create(article_id: params[:article_id], value: params[:value])
                @vote = Vote.last
                render json: @vote, only: [:article_id, :value, :id]
            end
        else
            render text: "CREATE ERROR: INVALID INFO"
        end
    end
end

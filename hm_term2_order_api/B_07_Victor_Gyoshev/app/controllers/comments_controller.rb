class CommentsController < ApplicationController

    def show
        if !params[:id].blank?
            if Comment.where(id: params[:id]).empty?
                render text: "Couldn't find comment with such ID."
            else
                @comment = Comment.find(params[:id])
                render json: @comment, only: [:id, :article_id, :content]
            end
        else
            render json: Comment.order(:content), only: [:id, :article_id, :content]
        end
    end

    def create
        if !params[:article_id].blank?
            if Article.where(id: params[:article_id]).empty?
                render text: "Couldn't find article with such id."
            else
                Comment.create(article_id: params[:article_id], content: params[:content])
                @comment = Comment.last
                render json: @comment, only: [:id, :article_id, :content]
            end
        else
            render text: "ERROR: ARTICLE NOT FOUND!"
        end
    end

    def commentshow
        if !params[:id].blank?
            render json: Comment.order(:content).where(article_id: params[:id]), only: [:id, :article_id, :content]
        else
            render text: "Invalid ID"
        end
    end

end

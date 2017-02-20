class CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        content = params['content']
        article_id = params['article_id'].to_i
        comment = Comment.create(content: content, article_id: article_id)
        comment.save!
        render :json => {'id': comment.id,
                         'article_id': comment.article_id,
                         'content': comment.content}
    end

    def index
        if Comment.exists?(id: params['id'].to_i)
            comment = Comment.find_by id: params['id'].to_i
            render :json => {'id': comment.id,
                             'article_id': comment.article_id,
                             'content': comment.content}
        end
    end


    def show
        result = Array.new
        Comment.order(:content).each do |comment|
            result.push({'id': comment.id,
                         'article_id': comment.article_id,
                         'content': comment.content})
        end
        render :json => result
    end
end

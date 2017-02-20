class ArticleVotesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        p params
        vote = ArticleVote.create(value: params['value'].to_i,
                                  article_id: params['article_id'].to_i)
        vote.save!

        render :json => {'article_id': vote.article_id,
                         'value': vote.value,
                         'id': vote.id}
    end



    def show
        result = Array.new
        ArticleVote.order(:created_at).each do |vote|
            result.push({'article_id': vote.article_id,
                         'value': vote.value,
                         'id': vote.id})
        end

        render :json => result
    end
end

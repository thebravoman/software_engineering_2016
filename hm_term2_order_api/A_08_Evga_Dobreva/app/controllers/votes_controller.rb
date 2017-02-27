class VotesController < ApplicationController
  before_action :set_vote, only: [:show, :edit, :update, :destroy]

  def index
      @votes=Vote.all
      array_json=[]
      @votes.each do |vote|
          array_json<<{id: vote.id, article_id: vote.article_id, value: vote.value}
      end
      hash_output={votes: array_json.sort_by { |hash| hash[:created_at]}}
      render :json => hash_output.to_json
  end

  def create
    vote_info=JSON.parse(request.raw_post)

    for id in 1...Float::INFINITY
        if (!Vote.exists?(id))
            vote_info[:id]=id
            break
        end
    end

    @vote=Vote.new(vote_info)
    @vote.save

    hash_output={id: @vote.id, article_id: @vote.article_id, value: @vote.value}
    render :json => hash_output.to_json
  end
end

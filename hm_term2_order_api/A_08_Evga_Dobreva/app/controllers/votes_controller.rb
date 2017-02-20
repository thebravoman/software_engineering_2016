class VotesController < ApplicationController
  before_action :set_vote, only: [:show, :edit, :update, :destroy]

  # GET /votes
  # GET /votes.json
  def index
      @votes = Vote.all

      json_array = []
      @votes.each do |vote|
          json_array << {id: vote.id, article_id: vote.article_id, value: vote.value}
      end
      output_hash = {votes: json_array.sort_by { |hash| hash[:created_at]}}
      render :json => output_hash.to_json
  end

  # POST /votes
  # POST /votes.json
  def create
    vote_info = JSON.parse(request.raw_post)

    for id in 1...Float::INFINITY
        if !Vote.exists?(id)
            vote_info[:id] = id
            break
        end
    end

    @vote = Vote.new(vote_info)
    @vote.save

    output_hash = {id: @vote.id,
                   article_id: @vote.article_id,
                   value: @vote.value}
    render :json => output_hash.to_json
  end
end

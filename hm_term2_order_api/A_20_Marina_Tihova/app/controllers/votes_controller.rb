class VotesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    vote_json = JSON.parse(request.raw_post)

    @current = Vote.create(vote_json)
    hash = {
              article_id: @current.article_id,
              value: @current.value,
              id: @current.id
            }
    render :json => hash, content_type: "application/json"
  end

  def index
    output_json = Array.new
    all =  Vote.all().sort_by{|c| c.created_at}

    all.each do |c|
      output_json <<  {
                        article_id: c.article_id,
                        value: c.value,
                        id: c.id
                      }
    end
    render :json => output_json, content_type: "application/json"
  end
end

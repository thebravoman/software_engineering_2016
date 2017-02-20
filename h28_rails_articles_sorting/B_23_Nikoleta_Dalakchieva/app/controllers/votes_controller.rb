class VotesController < ApplicationController
  before_action :set_vote, only: [:show, :edit, :update, :destroy]

  # GET /votes
  # GET /votes.json
  def index
    @votes = Vote.all


    json_array = []

    @votes.each do |vote|
     json_array << {id: vote.id,
                    article_id: vote.article_id,
                    value: vote.value}
      end

    json_array = json_array.sort_by{ |hash| hash[:created_at]}
    output_hash = {votes: json_array}
    render :json => output_hash.to_json
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
     if set_vote
        output_hash = {id: @vote.id,
                   article_id: @vote.article_id,
                   value: @vote.value}

        render :json => output_hash.to_json
      end
  end

  # GET /votes/1
  # GET /votes/1.json
  def show
  end

  # GET /votes/new
  def new
    @vote = Vote.new
  end

  # GET /votes/1/edit
  def edit
  end

  # POST /votes
  # POST /votes.json
  def create
    information = request.raw_post
    data_parsed = JSON.parse(information)

    vote_info = {article_id: data_parsed["article_id"], value: data_parsed["value"]}

    id = 1

    while id do
      if !Vote.exists?(id)
        vote_info[:id] = id
        break
      end
      id += 1
    end

    @vote = Vote.new(vote_info)
  
    @vote.save
    output_hash = {id: @vote.id,
                   article_id: @vote.article_id,
                   value: @vote.value}

    render :json => output_hash.to_json
  end

  # PATCH/PUT /votes/1
  # PATCH/PUT /votes/1.json
  def update
    respond_to do |format|
      if @vote.update(vote_params)
        format.html { redirect_to @vote, notice: 'Vote was successfully updated.' }
        format.json { render :show, status: :ok, location: @vote }
      else
        format.html { render :edit }
        format.json { render json: @vote.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /votes/1
  # DELETE /votes/1.json
  def destroy
    @vote.destroy
    respond_to do |format|
      format.html { redirect_to votes_url, notice: 'Vote was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vote
         if !Vote.exists?(params[:id]) 
          render :text => "No such vote"
          return false
      else
        @vote = Vote.find(params[:id])
        return true
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def vote_params
      params.require(:vote).permit(:value, :article_id)
    end
end

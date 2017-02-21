class ArticlesController < ApplicationController

    def show
        if params[:order] != "normdist"
            if !params[:id].blank?
                if Article.where(id: params[:id]).empty?
                    render text: "Couldn't find article with such ID."
                else
                    @article = Article.find(params[:id])
                    render json: @article, except: [:comments_score, :votes_score]
                end
            else
                render json: Article.order(:name), except: [:comments_score, :votes_score]
            end
        else

            @mincom = 10000000
            @maxcom = 0
            @currcom = 0
            @minvot = 10000000
            @maxvot = 0
            @currvot = 0
            Article.all.each do |artic|
                @currcom = Comment.where(article_id: artic.id).count
                @currvot = Vote.where(article_id: artic.id).count

                if @maxcom < @currcom
                    @maxcom = @currcom
                end

                if @mincom > @currcom
                    @mincom = @currcom
                end

                if @maxvot < @currvot
                    @maxvot = @currvot
                end

                if @minvot > @currvot
                    @minvot = @currvot
                end
            end

            Article.all.each do |artic|

                @comscore = Comment.where(article_id: artic.id).count
                if @maxcom != 0 && @comscore != 0
                    artic.comments_score = (@maxcom-@mincom)/@comscore.to_f
                else
                    artic.comments_score = 0.0
                end

                @votscore = Vote.where(article_id: artic.id).count
                if @maxvot != 0 && @votscore != 0
                    artic.votes_score = (@maxvot-@minvot)/@votscore.to_f
                else
                    artic.votes_score = 0.0
                end
                artic.save
            end

            if !params[:id].blank?
                if Article.where(id: params[:id]).empty?
                    render text: "Couldn't find article with such ID."
                else
                    render json: Article.where(id: params[:id]), only: [:id, :name, :comments_score, :votes_score]
                end
            else
                render json: Article.order(:comments_score, :votes_score), only: [:id, :name, :comments_score, :votes_score]
            end
        end
    end

    def create
        if !params[:name].blank?
            if Article.where(name: params[:name]).empty?
                Article.create(name: params[:name])
            end

            @article = Article.where(name: params[:name])
            render json: @article, except: [:comments_score, :votes_score]
        else
            render text: "Cannot create new article"
        end
    end
end

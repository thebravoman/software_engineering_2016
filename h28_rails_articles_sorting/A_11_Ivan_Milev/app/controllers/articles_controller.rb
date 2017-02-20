class ArticlesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        article_name = params['name']
        article = Article.create :name => article_name
        article.save!
        render :json => { 'name': article.name,
                          'id': article.id,
                          'created_at': article.created_at,
                          'update_at': article.updated_at}
    end


    def index
        if params.key?('order')
            if params['order'] == 'normdist'
                return show_normdist(params)
            end
        end
        if Article.exists?(id: params['id'].to_i)
            article = Article.find_by id: params['id'].to_i
            render :json => { 'name': article.name,
                              'id': article.id,
                              'created_at': article.created_at,
                              'update_at': article.updated_at}
        else
          render :json => {}
        end
    end


    def take_variance(content)
        avrg = 0
        p '--------------------'
        content.each do |item|
            p item
            avrg += item
        end
        p '--------------------'
        avrg = avrg / content.size

        variance = 0
        content.each do |x|
            variance = variance + (x - avrg) ** 2
        end
        p "variance11=#{variance}"
        variance = (variance.to_f / content.size).to_f
        p "variance=#{variance}"
        return Math.sqrt(variance)
    end


    def take_mean(content)
        sum = 0
        content.each do |item|
            sum += item
        end

        sum / content.size
    end

########################################################################################
    def erf z
        t = 1.0 / (1.0 + 0.5 * z.abs);
        p "t = #{t}, z = #{z.abs}"
        # use Horner's method
        ans = 1 - t * Math.exp( -z*z - 1.26551223 +
        t * ( 1.00002368 +
        t * ( 0.37409196 +
        t * ( 0.09678418 +
        t * (-0.18628806 +
        t * ( 0.27886807 +
        t * (-1.13520398 +
        t * ( 1.48851587 +
        t * (-0.82215223 +
        t * ( 0.17087277))))))))))
        p "ans = #{ans}"
        z >= 0 ? ans : -ans
    end

  # cumulative normal distribution
    def phi z
        p "Math.sqrt = #{Math.sqrt(2.0)}"
        p "z = #{z}"
        p "del = #{z / (Math.sqrt(2.0))}"
        return 0.5 * (1.0 + erf(z / (Math.sqrt(2.0))));
    end

  # cumulative normal distribution with mean mu and std deviation sigma
    def calc_normdist z, mu, sigma
        p '===================smth==================='
        p "1/z = #{z}"
        p "1/mu = #{mu}"
        p "1/sigma = #{sigma}"
        return phi((z - mu) / sigma).to_f;
    end
########################################################################################
    def calc_comment_score(art_id)
        x = Comment.where(article_id: art_id.to_i).size
        content = Array.new
        flag = false
        curr_pos = -1
        last_id = nil
        Comment.all.each do |comment|
            if !flag
                flag = true
                last_id = comment.article_id
                content << 1
                curr_pos += 1
            else
                if last_id != comment.article_id
                    content << 1
                    curr_pos += 1
                    last_id = comment.article_id
                else
                    content[curr_pos] += 1
                end
            end
        end
        comment_score = calc_normdist(x, take_mean(content), take_variance(content)) 
    end

    def calc_vote_score(art_id)
        votes = ArticleVote.where(article_id: art_id.to_i)
        x = 0
        votes.each do |vote|
            x += vote.value
        end
        flag = false
        content = Array.new
        last_id = nil
        curr_pos = -1
        ArticleVote.all.each do |vote|
            if !flag
                flag = true
                last_id = vote.article_id
                content << 1
                curr_pos += 1
            else
                if last_id != vote.article_id
                    content << 1
                    curr_pos += 1
                    last_id = vote.article_id
                else
                    content[curr_pos] += 1
                end
            end
        end
        calc_normdist(x, take_mean(content), take_variance(content))
    end

    def show_normdist(params)
        comment_score = calc_comment_score(params['id'])
        vote_score = calc_vote_score(params['id'])
        article = Article.find_by id: params['id'].to_i
        render :json => {'id': params['id'].to_i,
                         'name': article.name,
                         'comment_score': comment_score,
                         'vote_score': vote_score}
    end

    def show_order_normdist(params)
        articles = Array.new
        Article.all.each do |article|
            comment_score = calc_comment_score(article.id)
            p comment_score
            vote_score = calc_vote_score(article.id)
            p vote_score
            articles << {
                'name': article.name,
                'id': article.id,
                'created_at': article.created_at,
                'update_at': article.updated_at,
                'comment_score': comment_score,
                'vote_score': vote_score
            }
        end
        p articles
        articles.sort_by!{ |hsh| -(hsh['comment_score'].to_f + hsh['vote_score'].to_f)}
        p articles
        render :json => articles
    end



    def show
        if params.key?('order')
            if params['order'] == 'normdist'
                return show_order_normdist(params)
            end
        end
        result = Array.new
        Article.order(:name).each do |article|
            result.push({ 'name': article.name,
                          'id': article.id,
                          'created_at': article.created_at,
                          'update_at': article.updated_at})
        end
        render :json => result
    end


    def show_comments
        if Article.exists?(id: params['id'].to_i)
            article = Article.find_by id: params['id'].to_i
            comments = Comment.order(:content).where(article_id: article.id)
            result = Array.new
            comments.each do |comment|
                result.push({'id': comment.id,
                             'article_id': comment.article_id,
                             'content': comment.content})
            end
            render :json => result
        end
    end
end

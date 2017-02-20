class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

	def calculate_comments_score
		comments = Hash.new
		Article.all.each do |article|
			comments[article.id] = 0.0
			Comment.all.each do |comment|
				if article.id == comment.article_id then
					comments[article.id] = comments[article.id] + 1
				end
			end
		end
		
		max_key_comments = comments.key(comments.values.max)
		min_key_comments = comments.key(comments.values.min)

		comments = comments.
		transform_values{|v| (v - comments[min_key_comments]) / (comments[max_key_comments] - comments[min_key_comments])}
		
		Article.all.each do |article|
			comments.each do |key, value|
				if article.id == key then
					article.comments_score = value
				end
			end
			article.save
		end
		
	end

	def calculate_votes_score
		votes = Hash.new
		Article.all.each do |article|
			votes[article.id] = 0.0
			Vote.all.each do |vote|
				if article.id == vote.article_id then
					votes[article.id] = votes[article.id].to_f + vote.value.to_f
					
				end
			end

		end
		
		max_key_votes = votes.key(votes.values.max)
		min_key_votes = votes.key(votes.values.min)

		votes = votes.
		transform_values{|v| (v - votes[min_key_votes]).to_f / (votes[max_key_votes] - votes[min_key_votes]).to_f}

		Article.all.each do |article|
			votes.each do |key, value|
				if article.id == key then
					article.votes_score = value
				end
			end
			article.save
		end

	end	

	

	def calculate_general_scores
		Article.all.each do |article|
			article.general_score = article.comments_score + article.votes_score
			article.save
		end
	end


	def index
		render html: "
<p>Next requests are allowed : </p>
        <p>post '/articles'</p>

	<p>get '/articles'</p> 

	<p>get '/articles/:id'</p> 

	<p>post '/comments'</p> 
	
	<p>get '/comments' </p>

	<p>get '/comments/:id'</p>

	<p>get '/articles/:id/comments'</p> 
	
	<p>post '/votes'</p>
	
	<p>get '/votes'</p>

<p>Ps. Nqmah vreme da pravq dizain na strani4kata. I izlizam, 4e stanaha 3 neizvineni :D</p> 

".html_safe
	end
	
end

class Article < ApplicationRecord
  has_many :comments
  has_many :votes

  def score
    comments_score + votes_score
  end

  def comments_score
    comment_count = []

    Article.all.each do |article|
      comment_count.push(article.comments.length)
    end

    normdist(self.comments.length, comment_count)
  end

  def votes_score
    votes_count = []

    Article.all.each do |article|
      votes_count.push(article.votes_sum)
    end

    normdist(self.votes_sum, votes_count)
  end

  def votes_sum
    sum = 0
    self.votes.each do |vote|
      sum = sum + vote.value
    end
    sum
  end

  def normdist(x, array)
    mean = array.sum / array.length
    array.map! { |count| (count - mean) ** 2 }
    mean_squared = (1.0 / array.length) * array.sum

    std = Math.sqrt(mean_squared)

    result = 1 / (Math.sqrt(2 * Math::PI) * std)
    result * Math.exp(-0.5 * ((x - mean) / std ** 2))
  end
end

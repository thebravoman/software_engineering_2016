json.extract! vote, :id, :article_id, :value, :created_at, :updated_at
json.url vote_url(vote, format: :json)
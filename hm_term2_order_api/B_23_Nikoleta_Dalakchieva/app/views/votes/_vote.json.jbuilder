json.extract! vote, :id, :value, :article_id, :created_at, :updated_at
json.url vote_url(vote, format: :json)
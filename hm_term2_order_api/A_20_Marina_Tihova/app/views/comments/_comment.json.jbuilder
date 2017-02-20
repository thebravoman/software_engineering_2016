json.extract! comment, :id, :article_id, :content, :created_at, :updated_at
json.url comment_url(comment, format: :json)
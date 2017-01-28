require 'test_helper'

class EmptyControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get empty_index_url
    assert_response :success
  end

end

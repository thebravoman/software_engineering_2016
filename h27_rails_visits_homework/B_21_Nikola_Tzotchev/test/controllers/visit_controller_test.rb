require 'test_helper'

class VisitControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get visit_index_url
    assert_response :success
  end

end

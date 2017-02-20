require 'test_helper'

class VisitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get visits_index_url
    assert_response :success
  end

end

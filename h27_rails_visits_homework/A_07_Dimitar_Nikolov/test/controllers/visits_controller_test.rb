require 'test_helper'

class VisitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get visits_index_url
    assert_response :success
  end

  test "should get increment" do
    get visits_increment_url
    assert_response :success
  end

end

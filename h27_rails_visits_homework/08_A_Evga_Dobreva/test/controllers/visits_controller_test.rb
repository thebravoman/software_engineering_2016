require 'test_helper'

class VisitsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get visits_new_url
    assert_response :success
  end

end

require 'test_helper'

class Administration::AdministrationControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get administration_administration_add_url
    assert_response :success
  end

  test "should get update" do
    get administration_administration_update_url
    assert_response :success
  end

end

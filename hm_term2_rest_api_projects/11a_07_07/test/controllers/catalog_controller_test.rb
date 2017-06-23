require 'test_helper'

class CatalogControllerTest < ActionDispatch::IntegrationTest
  test "should get view" do
    get catalog_view_url
    assert_response :success
  end

end

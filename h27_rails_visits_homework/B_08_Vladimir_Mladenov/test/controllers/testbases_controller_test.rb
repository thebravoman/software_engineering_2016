require 'test_helper'

class TestbasesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @testbasis = testbases(:one)
  end

  test "should get index" do
    get testbases_url
    assert_response :success
  end

  test "should get new" do
    get new_testbasis_url
    assert_response :success
  end

  test "should create testbasis" do
    assert_difference('Testbase.count') do
      post testbases_url, params: { testbasis: { age: @testbasis.age, name: @testbasis.name } }
    end

    assert_redirected_to testbasis_url(Testbase.last)
  end

  test "should show testbasis" do
    get testbasis_url(@testbasis)
    assert_response :success
  end

  test "should get edit" do
    get edit_testbasis_url(@testbasis)
    assert_response :success
  end

  test "should update testbasis" do
    patch testbasis_url(@testbasis), params: { testbasis: { age: @testbasis.age, name: @testbasis.name } }
    assert_redirected_to testbasis_url(@testbasis)
  end

  test "should destroy testbasis" do
    assert_difference('Testbase.count', -1) do
      delete testbasis_url(@testbasis)
    end

    assert_redirected_to testbases_url
  end
end

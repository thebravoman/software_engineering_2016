require 'test_helper'

class VisitrosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @visitro = visitros(:one)
  end

  test "should get index" do
    get visitros_url
    assert_response :success
  end

  test "should get new" do
    get new_visitro_url
    assert_response :success
  end

  test "should create visitro" do
    assert_difference('Visitro.count') do
      post visitros_url, params: { visitro: { count: @visitro.count, user_id: @visitro.user_id } }
    end

    assert_redirected_to visitro_url(Visitro.last)
  end

  test "should show visitro" do
    get visitro_url(@visitro)
    assert_response :success
  end

  test "should get edit" do
    get edit_visitro_url(@visitro)
    assert_response :success
  end

  test "should update visitro" do
    patch visitro_url(@visitro), params: { visitro: { count: @visitro.count, user_id: @visitro.user_id } }
    assert_redirected_to visitro_url(@visitro)
  end

  test "should destroy visitro" do
    assert_difference('Visitro.count', -1) do
      delete visitro_url(@visitro)
    end

    assert_redirected_to visitros_url
  end
end

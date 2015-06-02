require 'test_helper'

class PipeablesControllerTest < ActionController::TestCase
  setup do
    @pipeable = pipeables(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pipeables)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pipeable" do
    assert_difference('Pipeable.count') do
      post :create, pipeable: { description: @pipeable.description, name: @pipeable.name, state: @pipeable.state }
    end

    assert_redirected_to pipeable_path(assigns(:pipeable))
  end

  test "should show pipeable" do
    get :show, id: @pipeable
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pipeable
    assert_response :success
  end

  test "should update pipeable" do
    patch :update, id: @pipeable, pipeable: { description: @pipeable.description, name: @pipeable.name, state: @pipeable.state }
    assert_redirected_to pipeable_path(assigns(:pipeable))
  end

  test "should destroy pipeable" do
    assert_difference('Pipeable.count', -1) do
      delete :destroy, id: @pipeable
    end

    assert_redirected_to pipeables_path
  end
end

class Administration::AdministrationController < ApplicationController
  before_action :authenticate_admin!

  def add
    @title = 'Add Item'
  end

  def update
    @title = 'Update Item'
  end
end

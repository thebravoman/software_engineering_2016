class AddDefaultValueToVisitCount < ActiveRecord::Migration[5.0]
  def change
    change_column :visits, :count, :integer, default: 0
  end
end

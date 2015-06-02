class AddDefaultToPipeableState < ActiveRecord::Migration
  def change
    change_column :pipeables, :state, :integer, default: 0
  end
end

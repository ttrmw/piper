class CreatePipeables < ActiveRecord::Migration
  def change
    create_table :pipeables do |t|
      t.string :name
      t.text :description
      t.integer :state

      t.timestamps null: false
    end
  end
end

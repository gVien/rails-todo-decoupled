class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :task
      t.boolean :complete, default: false

      t.timestamps null: false
    end
  end
end

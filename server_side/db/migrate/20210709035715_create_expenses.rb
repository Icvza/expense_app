class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :name
      t.integer :amount
      t.integer :category_id
      t.string :due_date
    end
  end
end

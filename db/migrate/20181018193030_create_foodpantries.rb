class CreateFoodpantries < ActiveRecord::Migration[5.2]
  def change
    create_table :foodpantries do |t|
      t.string :name
      t.string :address
      t.integer :zipcode
      t.text :notes

      t.timestamps
    end
  end
end


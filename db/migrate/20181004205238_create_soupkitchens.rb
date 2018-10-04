class CreateSoupkitchens < ActiveRecord::Migration[5.2]
  def change
    create_table :soupkitchens do |t|
      t.string :name
      t.string :address
      t.integer :zipcode
      t.text :notes

      t.timestamps
    end
  end
end

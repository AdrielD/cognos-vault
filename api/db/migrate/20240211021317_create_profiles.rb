class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.text :bio
      t.datetime :birthday

      t.timestamps
    end
  end
end

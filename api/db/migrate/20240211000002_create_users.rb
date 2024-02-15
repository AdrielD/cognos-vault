class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.integer :profile_id, null: false
      t.integer :account_id, null: false
      # ACL

      t.timestamps
    end
  end
end

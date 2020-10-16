class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :user_name 
      t.string :hometown
      t.string :email
      t.string :password_digest
      t.string :upid
      t.string :upph
      
      t.timestamps
    end
  end
end

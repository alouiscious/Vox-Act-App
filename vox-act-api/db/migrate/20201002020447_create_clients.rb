class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :client_name 
      t.string :hometown
      t.string :email
      t.string :password
      t.string :cpid
      t.string :photo
   
      t.timestamps
    end
  end
end

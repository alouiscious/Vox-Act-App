class CreateTalents < ActiveRecord::Migration[6.0]
  def change
    create_table :talents do |t|
      t.string :talent_style
      t.string :client_name
      t.string :client_id
      t.string :title
      t.string :media_URL
      t.string :mfid


      t.timestamps
    end
  end
end

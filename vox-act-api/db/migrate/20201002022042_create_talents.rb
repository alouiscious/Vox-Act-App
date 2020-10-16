class CreateTalents < ActiveRecord::Migration[6.0]
  def change
    create_table :talents do |t|
      t.string :talent_style
      t.string :user_name
      t.string :upid
      t.string :title
      t.string :description
      t.string :media_URL
      t.string :phmf
      t.string :vimf
      t.string :aumf

      t.timestamps
    end
  end
end

class CreateTalents < ActiveRecord::Migration[6.0]
  def change
    create_table :talents do |t|
      t.string :talent_style
      t.string :title
      t.string :description
      t.string :phmf
      t.string :vimf
      t.string :aumf

      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

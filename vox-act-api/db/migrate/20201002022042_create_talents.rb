class CreateTalents < ActiveRecord::Migration[6.0]
  def change
    create_table :talents do |t|

      t.timestamps
    end
  end
end

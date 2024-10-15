class CreateBillBoards < ActiveRecord::Migration[7.2]
  def change
    create_table :bill_boards do |t|
      t.string :title

      t.timestamps
    end
  end
end

class Artist < ApplicationRecord
  belongs_to :bill_board
  has_many :songs, dependent: :destroy
  validates :first_name, :last_name, presence: true
end

class BillBoard < ApplicationRecord
  has_many :artists
  validates :title, length: { minimum: 2 }
  validates :title, presence: true
end

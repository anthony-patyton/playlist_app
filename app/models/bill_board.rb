class BillBoard < ApplicationRecord
  has_many :artists, dependent: :destroy
  validates :title, length: { minimum: 2 }
  validates :title, presence: true
end

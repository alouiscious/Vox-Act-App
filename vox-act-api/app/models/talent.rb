class Talent < ApplicationRecord
  belongs_to :user
  validates :description, uniqueness: true

end

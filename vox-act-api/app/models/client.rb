class Client < ApplicationRecord
  has_many talents
  validates :email, :name, presence: true
  validates :email, uniqueness: true

end

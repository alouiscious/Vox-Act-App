class Client < ApplicationRecord
  has_many :talents
  validates :email, :client_name, presence: true
  validates :email, uniqueness: true

end

class Client < ApplicationRecord
  has_secure_password
  has_many talents
  validates :email, :name, presence: true
  validates :email, uniquesness: true

end

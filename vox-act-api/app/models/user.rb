class User < ApplicationRecord
  has_secure_password
  has_many :talents
  validates :user_name, :email, presence: true
  validates :email, uniqueness: true


end

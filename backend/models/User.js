const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    img: {
      type: String,
      default:
        'https://res.cloudinary.com/dzqbzqgjm/image/upload/v1587010900/default-user-image_qjqjqj.png',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)

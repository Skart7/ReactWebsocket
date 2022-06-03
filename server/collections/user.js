const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userIntro: { type: String },
    email: { type: String },
    fname: { type: String },
    lname: { type: String },
},
{
    timestamps: true
}
)


const User = mongoose.models.User || mongoose.model('User', UserSchema)

module.exports = User
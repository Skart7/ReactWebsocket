const mongoose = require('mongoose')

const MessageShema = new mongoose.Schema({
    room: { type: String },
    userid: { type: String },
    message: { type: String }
},
{
    timestamps: true
}
)


const Message = mongoose.models.Message || mongoose.model('Message', MessageShema)

module.exports = Message
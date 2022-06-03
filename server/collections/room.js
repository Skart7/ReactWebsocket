const mongoose = require('mongoose')

const RoomShema = new mongoose.Schema({
    members: [],
},
{
    timestamps: true
}
)


const Room = mongoose.models.Room || mongoose.model('Room', RoomShema)

module.exports = Room
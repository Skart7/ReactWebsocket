const router = require("express").Router()
const Room = require('../collections/room')
const db = require('../db')

router.post('/get', async (req, res) => {

    try {

        const {userid} = req.body

        await db.connect()

        const getRooms = await Room.find({ members: { $in: userid } })

        if(!getRooms) {
            await db.disconnect()
            return res.status(400).json("Rooms is not found")
        }

        await db.disconnect()
        return res.status(200).json(getRooms)

    }   
    catch (e) {
        console.log(e.message)
    }

})
router.post('/create', async (req, res) => {

    try {

        const {members} = req.body

        await db.connect()

        const newRoom = new Room({ members })

        await newRoom.save()

        await db.disconnect()

        return res.send(200).json(true)
    }   
    catch (e) {
        console.log(e.message)
    }

})

module.exports = router
const router = require("express").Router()
const Message = require('../collections/message')
const db = require('../db')

router.post('/new', async (req, res) => {

    try {

        const {room, userid, message} = req.body

        await db.connect()

        const newMessage = new Message({ room, userid, message })

        await newMessage.save()

        await db.disconnect()
        return res.status(200).json(newMessage)

    }   
    catch (e) {
        console.log(e.message)
    }

})

router.post('/chat', async (req, res) => {

    try {

        const {roomid} = req.body

        await db.connect()

        const getChat = await Message.find({ room: roomid })

        if(!getChat) {
            await db.disconnect()
            return res.send(400).json("Room is not exist")
        }

        await db.disconnect()

        return res.status(200).json(getChat)

    }   
    catch (e) {
        console.log(e.message)
    }

})

module.exports = router
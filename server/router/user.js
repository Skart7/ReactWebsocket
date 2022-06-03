const router = require("express").Router()
const User = require('../collections/user')
const db = require('../db')

router.post('/login', async (req, res) => {

    try {

        const {email, fname, lname, userIntro} = req.body

        await db.connect()

        const getUser = await User.findOne({ email: email })

        if(getUser) {
            await db.disconnect()
            return res.status(200).json(getUser)
        }

        const newUser = new User({ email, fname, lname, userIntro })
        await newUser.save()

        await db.disconnect()

        return res.status(201).json(newUser)
    }   
    catch (e) {
        console.log(e.message)
    }

})

router.post('/interlocutor', async (req, res) => {

    try{
        const {interlocutor} = req.body

        await db.connect()

        const getInterlocutor = await User.findOne({ _id: interlocutor })

        if(!getInterlocutor) {
            await db.disconnect()
            return res.status(400).json("interlocutor is not found")
        }

        await db.disconnect()
        return res.status(200).json(getInterlocutor)
    }   
    catch(e) {
        console.log(e.message)
    }
})

router.post('/get', async (req, res) => {

    try {
        const {query} = req.body

        await db.connect()

        const getUser = await User.findOne({ email: query })

        if(getUser) {
            await db.disconnect()
            return res.send(200).json(getUser)
        }

        await db.disconnect()
        return res.send(400).json("User is not found")

    }
    catch (e) {
        console.log(e.message)
    }
})

module.exports = router
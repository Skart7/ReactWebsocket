const mongoose = require('mongoose')

const connection = {}

async function connect() {
  const db = await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    connection.isConnected = db.connections[0].readyState
}
async function disconnect() {
    if(connection.isConnected) {
        await mongoose.disconnect()
        connection.isConnected = false
    }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString()
  doc.createdAt = doc.createdAt.toString()
  doc.updatedAt = doc.updatedAt.toString()
  return doc
}

const db = { connect, disconnect, convertDocToObj }

module.exports = db
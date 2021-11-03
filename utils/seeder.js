const rooms = require('../data/rooms');
const Room = require('../models/room');
const { connect } = require('mongoose')

const seedRooms = async () => {
    try {
        await connect("mongodb://localhost:27017/booking");

        await Room.deleteMany()
        console.info("Rooms are deleted");

        await Room.insertMany(rooms)
        console.info("All rooms are added");
        return
    } catch (error) {
        console.error(error.message)
        process.exit()
    }
}

seedRooms()
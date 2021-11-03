import Room from "../models/room";

const allRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const newRoom = async (req, res) => {
  try {
    const { body } = req;
    const room = await Room.create(body);

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getRoom = async (req, res) => {
  try {
    const { id } = req.query;
    const room = await Room.findById(id);

    if (!room) {
      res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const updateRoom = async (req, res) => {
  try {
    const {
      body,
      query: { id },
    } = req;
    let room = await Room.findById(id);

    if (!room) {
      res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    room = await Room.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const {
      query: { id },
    } = req;
    const room = await Room.findById(id);

    if (!room) {
      res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }

    await room.remove();

    res.status(200).json({
      success: true,
      message: "Room is deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { allRooms, newRoom, getRoom, updateRoom, deleteRoom };

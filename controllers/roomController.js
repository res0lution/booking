import catchAsyncError from "../middlewares/catchAsyncError";
import Room from "../models/room";
import APIFeatures from "../utils/apiFeatures";
import ErrorHandler from "../utils/errorHandler";

const allRooms = catchAsyncError(async (req, res) => {

  const apiFeatures = new APIFeatures(Room.find(), req.query).search()
  
  const rooms = await apiFeatures.query;

  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

const newRoom = catchAsyncError(async (req, res) => {
  const { body } = req;
  const room = await Room.create(body);

  res.status(200).json({
    success: true,
    room,
  });
});

const getRoom = catchAsyncError(async (req, res, next) => {
  const { id } = req.query;
  const room = await Room.findById(id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

const updateRoom = catchAsyncError(async (req, res, next) => {
  const {
    body,
    query: { id },
  } = req;
  let room = await Room.findById(id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
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
});

const deleteRoom = catchAsyncError(async (req, res, next) => {
  const {
    query: { id },
  } = req;
  const room = await Room.findById(id);

  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }

  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});

export { allRooms, newRoom, getRoom, updateRoom, deleteRoom };

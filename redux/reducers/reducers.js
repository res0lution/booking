import { combineReducers } from "redux";
import { allRoomsReducer } from "./roomReducer";

const reducer = combineReducers({ allRooms: allRoomsReducer })

export default reducer
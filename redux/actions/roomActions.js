import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  ALL_ROOM_FAIL,
  ALL_ROOM_SUCCESS,
  CLEAR_ERRORS,
  ROOMS_DETAILS_FAIL,
  ROOMS_DETAILS_SUCCESS,
} from "../constants/roomConstants";

export const getRooms =
  (req, currentPage = 1, location = "") =>
  async (dispatch) => {
    try {
      const { origin } = absoluteUrl(req);
      const { data } = await axios.get(
        `${origin}/api/rooms?page=${currentPage}&location=${location}`
      );

      dispatch({
        type: ALL_ROOM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_ROOM_FAIL,
        payload: error.message,
      });
    }
  };

export const getRoomDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms/${id}`);

    dispatch({
      type: ROOMS_DETAILS_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: ROOMS_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};

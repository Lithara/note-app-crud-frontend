import axios from "axios";
import {
  ADD_NOTE_URL,
  BACKEND_BASE_URL,
  DELETE_NOTE_URL,
  GET_ALL_NOTES_URL,
  UPDATE_NOTE_URL,
} from "../_url/notes/url";

axios.defaults.baseURL = BACKEND_BASE_URL;

export const getAllNotesAPI = async () => {
  try {
    const response = await axios.get(GET_ALL_NOTES_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

export const getNoteAPI = async (id: any) => {
  try {
    const response = await axios.get(`${GET_ALL_NOTES_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching note with id ${id}:`, error);
    throw error;
  }
};

export const createNoteAPI = async (noteData: any) => {
  try {
    const response = await axios.post(ADD_NOTE_URL, noteData);
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

export const updateNoteAPI = async (id: any, noteData: any) => {
  try {
    const response = await axios.put(`${UPDATE_NOTE_URL}/${id}`, noteData);
    return response.data;
  } catch (error) {
    console.error(`Error updating note with id ${id}:`, error);
    throw error;
  }
};

export const deleteNoteAPI = async (id: any) => {
  try {
    const response = await axios.delete(`${DELETE_NOTE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting note with id ${id}:`, error);
    throw error;
  }
};

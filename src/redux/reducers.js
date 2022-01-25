import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { combineReducers } from "redux";
let state = {
    contacts: {
      items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
      filter: "",
    },
  };
const contactsReducer = createReducer(state.contacts.items, {
    [actions.addContact]: (state, action) => [action.payload, ...state],
    [actions.deleteContact]: (state, action) => state.filter((item) => item.id !== action.payload)
})

const filterReducer = createReducer(state.contacts.filter, {
  [actions.filterContacts]: (state, action) => (state)
})

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer
})
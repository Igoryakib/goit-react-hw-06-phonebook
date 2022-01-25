import { createAction } from "@reduxjs/toolkit";
import * as actionTypes from "./action-types";
const shortid = require("shortid");

const addContact = createAction(actionTypes.ADD_CONTACT, (text, number) => {
  return {
    payload: {
      name: text,
      id: shortid.generate(),
      number: number,
    },
  };
});

const deleteContact = createAction(actionTypes.DELETE_CONTACT);
const filterContacts = createAction(actionTypes.FILTER_CONTACT);

export { addContact, deleteContact, filterContacts };

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./ListContacts.module.scss";
import ContactItem from "../ContactItem/ContactItem";

const ListContacts = ({ contacts, onDeleteContact, btnText }) => {
  const { list } = styles;
  return (
    <ul className={list}>
      {contacts.map((item) => {
        return (
          <ContactItem
            key={item.id} 
            itemArray={item}
            onDelete={()=>{onDeleteContact(item.id)}}
            btnText={btnText}
          />
        );
      })}
    </ul>
  );
};

ListContacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  btnText: PropTypes.string
};


const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id))
})

export default connect(null, mapDispatchToProps)(ListContacts);

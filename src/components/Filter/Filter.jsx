import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./Filter.module.scss";

const Filter = ({ value, filterContacts }) => {
  const { input_form, label_form } = styles;
  const handleOnChange = (event) => {
    filterContacts(event.currentTarget.value);
  };
  return (
    <label className={label_form}>
      Find contacts by name
      <input
        className={input_form}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleOnChange}
        value={value}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  filterContacts: (value) => dispatch(actions.filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

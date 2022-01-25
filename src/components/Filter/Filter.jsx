import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";

const Filter = ({ value, handleOnChange }) => {
  const { input_form, label_form } = styles;
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

Filter.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Filter;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// styles
import styles from "./PhoneBook.module.scss";
import ListContacts from "../ListContacts/ListContacts";
// additional utils & components
import Filter from "../Filter/Filter";
import * as actions from "../../redux/actions";
const shortid = require("shortid");

class PhoneBook extends Component {
  state = {
    name: "",
    number: "",
  };

  static propTypes = {
    btnText: PropTypes.string,
  };

  verifyData = () => {
    this.state.name.toLocaleLowerCase();
    this.props.contacts?.map((item) => {
      item.name.toLocaleLowerCase();
      if (item.name === this.state.name || item.number === this.state.number) {
        alert(`${this.state.name} is already in contacts`);
        return this.setState({
          name: "",
          number: "",
        });
      }
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
    this.verifyData();
  };

  submitContact = (event) => {
    event.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    const { btnText } = this.props;
    const { name, number } = this.state;
    const { input_form, form_add_contact, label_form, submit_btn, title_list } =
      styles;
    return (
      <>
        <form className={form_add_contact} onSubmit={this.submitContact}>
          <label className={label_form}>
            Name
            <input
              className={input_form}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleOnChange}
              value={name}
            />
          </label>
          <label className={label_form}>
            Number
            <input
              className={input_form}
              value={number}
              onChange={this.handleOnChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={submit_btn} type="submit">
            {btnText}
          </button>
        </form>
        <h2 className={title_list}>Contacts</h2>
        <div>
          <Filter />
          <ListContacts
            contacts={this.props.contacts}
            btnText="Delete"
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const normalizedFilterArray = state.contacts.filter.toLowerCase();
  const filteredArray = state.contacts.items.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilterArray)
  );
  return { contacts: filteredArray}
};

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, number) => dispatch(actions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
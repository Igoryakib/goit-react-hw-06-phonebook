import React from "react";
import PropTypes from "prop-types";
import styles from './SectionPhoneBook.module.scss';


const SectionPhoneBook = ({ title, children }) => {
  const {title_section, phoneBook_section} = styles;
  return (
    <section className={phoneBook_section}>
      <h1 className={title_section}>{title}</h1>
      {children}
    </section>
  );
};

SectionPhoneBook.propTypes = {
  title: PropTypes.string,
}

export default SectionPhoneBook;

import React from "react";
import SectionPhoneBook from "./SectionPhoneBook/SectionPhoneBook";
import PhoneBook from "./Form/PhoneBook";

const App = () => {
    return(
           <SectionPhoneBook title="PhoneBook">
            <PhoneBook btnText="Add contact" />
           </SectionPhoneBook> 
    );
};

export default App;
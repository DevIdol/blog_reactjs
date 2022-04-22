import React from "react";
import classes from "./Contact.module.css";
import ContactTitle from "./ContactTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={`${classes["contact-section"]}`}>
      <ContactTitle/>
      <ContactForm />
    </section>
  );
};

export default Contact;

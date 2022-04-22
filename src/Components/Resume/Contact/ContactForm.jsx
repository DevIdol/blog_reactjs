import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Input from "../../Screens/Input";
import Button from "../../Screens/Button";
import classes from "./ContactForm.module.css";
import { AlertMessage } from "../../Alert/Alert";
const ContactForm = () => {
  const [successAlt, setSuccessAlt] = useState(undefined);
  const [errorAlt, setErrorAlt] = useState(undefined);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        username.trim().length > 2 &&
          email.includes("@") &&
          desc.trim().length > 1
      );
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [username, email, desc]);

  const handleForm = useRef();
  const onSubmitEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qc9qyid",
        "template_u1hmpi5",
        handleForm.current,
        "xb9SX1IiNXCEYTS3c"
      )
      .then(
        (result) => {
          result && setSuccessAlt(true);
          result &&
            setTimeout(() => {
              setSuccessAlt(false);
            }, 3200);
        },
        (error) => {
          error && setErrorAlt(true);
          error &&
            setTimeout(() => {
              setErrorAlt(false);
            }, 3200);
        }
      );
    e.target.reset();
  };

  return (
    <div className={classes["contact-form"]}>
      <form className={classes.form} ref={handleForm} onSubmit={onSubmitEmail}>
        {successAlt && <AlertMessage alert="success" message="Success!" />}
        {errorAlt && <AlertMessage alert="error" message="Error!" />}

        <Input
          className={classes["input-form"]}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          className={classes["input-form"]}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={classes.textarea}
          name="message"
          placeholder="Enter Your Message"
          rows="6"
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <Button
          className={classes.button}
          type="submit"
          disabled={!formIsValid}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

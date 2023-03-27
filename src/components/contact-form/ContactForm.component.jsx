import { useState } from 'react';

import ButtonSend from '../button/ButtonSend.component';
import Input from '../input/Input.component';
import Spinner from '../spinner/Spinner.component';

import './ContactForm.styles.scss';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  subject: '',
  message: '',
};

const ContactForm = function () {
  // We have small project, hence we don't need use elaborate state-management and can use only state on current component and, if need, props drilling
  // Adding dummy for form submitting, spinner which render when form submitting
  const [isLoading, setIsLoading] = useState(false);
  const [isDataSended, setIsDataSended] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, phoneNumber, message } = formFields;

  const handleFormSubmit = function (e) {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsDataSended(true);
      setIsLoading(false);
      resetFormFields();
    }, 1000);

    setTimeout(() => {
      setIsDataSended(false);
    }, 3000);
  };

  const handleInputChange = function (e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };

  return (
    <form
      action="#"
      className="contact-form"
      onSubmit={handleFormSubmit}
    >
      <div className="inputs-wrapper">
        <Input
          handleChange={handleInputChange}
          name="firstName"
          value={firstName}
          placeholder={'John'}
          type="text"
          label="First Name"
          className="contact-form-input"
        />
        <Input
          handleChange={handleInputChange}
          name="lastName"
          value={lastName}
          placeholder={'Doe'}
          type="text"
          label="Last Name"
          className="contact-form-input"
        />
        <Input
          handleChange={handleInputChange}
          name="email"
          value={email}
          placeholder={'example@email.com'}
          type="email"
          label="Email"
          className="contact-form-input"
        />
        <Input
          handleChange={handleInputChange}
          name="phoneNumber"
          value={phoneNumber}
          placeholder={'+* ***  ********'}
          type="text"
          label="Phone Number"
          className="contact-form-input"
        />
      </div>

      <div className="subject-wrapper">
        <div className="subtitle">Select Subject?</div>
        <div className="radio-btn-wrapper">
          <Input
            handleChange={handleInputChange}
            name="subject"
            value="subject-1"
            type="radio"
            label="General Inquiry"
            className="contact-form-radio"
          />
          <Input
            handleChange={handleInputChange}
            name="subject"
            value="subject-2"
            type="radio"
            label="General Inquiry"
            className="contact-form-radio"
          />
          <Input
            handleChange={handleInputChange}
            name="subject"
            value="subject-3"
            type="radio"
            label="General Inquiry"
            className="contact-form-radio"
          />
          <Input
            handleChange={handleInputChange}
            name="subject"
            value="subject-4"
            type="radio"
            label="General Inquiry"
            className="contact-form-radio"
          />
        </div>
      </div>

      <Input
        handleChange={handleInputChange}
        name="message"
        value={message}
        placeholder={'Write your message..'}
        textarea
        label="Message"
        className="contact-form-input"
      />

      {isDataSended && (
        <span className="send-status">Thank you, message sended</span>
      )}

      <div className="button-wrap">
        <ButtonSend type="submit">
          {isLoading ? <Spinner /> : 'Subscribe'}
        </ButtonSend>
      </div>
    </form>
  );
};

export default ContactForm;

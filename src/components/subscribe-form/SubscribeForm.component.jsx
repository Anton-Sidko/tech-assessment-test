import { useState } from 'react';
import Button from '../button/Button.component';
import Input from '../input/Input.component';
import Spinner from '../spinner/Spinner.component';

import './SubscribeForm.styles.scss';

const SubscribeForm = function () {
  // We have small project, hence we don't need use elaborate state-management and can use only state on current component and, if need, props drilling
  // Adding dummy for form submitting, spinner which render when form submitting
  const [isLoading, setIsLoading] = useState(false);
  const [isDataSended, setIsDataSended] = useState(false);
  const [email, setEmail] = useState('');

  const handleFormSubmit = function (e) {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsDataSended(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);

    setTimeout(() => {
      setIsDataSended(false);
    }, 3000);
  };

  // Adding handler for change input value, for controlled input
  const handleInputChange = function (e) {
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <>
      <form
        action="#"
        className="subscribe-form"
        onSubmit={handleFormSubmit}
      >
        <Input
          handleChange={handleInputChange}
          value={email}
          placeholder={'Your email address'}
          type="email"
          className="footer-subscribe-input"
        />
        <Button
          type="submit"
          className="footer-subscribe-btn"
        >
          {isLoading ? <Spinner /> : 'Subscribe'}
        </Button>
      </form>
      {isDataSended && (
        <span className="send-status">
          Thank you, you have subscribed for news
        </span>
      )}
    </>
  );
};

export default SubscribeForm;

import Button from './Button.component';
import LetterSend from '../../assets/letter_send.svg';
import './Button.styles.scss';

// Create wrapper on default button for adding extra functional
const ButtonSend = function ({ children, className, ...otherProps }) {
  return (
    <div className="btn-send-wrapper">
      <Button
        children={children}
        className={className}
        {...otherProps}
      />
      <div className="img-wrap send-img">
        <img
          src={LetterSend}
          alt=""
        />
      </div>
    </div>
  );
};

export default ButtonSend;

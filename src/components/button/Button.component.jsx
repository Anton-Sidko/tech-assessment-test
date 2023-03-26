import './Button.styles.scss';

const Button = function ({ children, className, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className={`button-default ${className ? className : ''}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;

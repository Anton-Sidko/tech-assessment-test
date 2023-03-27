import './Input.styles.scss';

const Input = function ({
  placeholder,
  className,
  label,
  handleChange,
  textarea,
  ...otherProps
}) {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}

      {!textarea ? (
        <input
          className={`form-input ${className ? className : ''}`.trim()}
          placeholder={placeholder}
          {...otherProps}
          onChange={handleChange}
        />
      ) : (
        <textarea
          className={`form-input ${className ? className : ''}`.trim()}
          placeholder={placeholder}
          {...otherProps}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Input;

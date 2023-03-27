import './Input.styles.scss';

const Input = function ({
  placeholder,
  className,
  id,
  label,
  labelAfter,
  handleChange,
  textarea,
  ...otherProps
}) {
  return (
    <div className="input-group">
      {!labelAfter && label && <label htmlFor={id}>{label}</label>}

      {!textarea ? (
        <input
          className={`form-input ${className ? className : ''}`.trim()}
          placeholder={placeholder}
          id={id ? id : null}
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

      {labelAfter && label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Input;

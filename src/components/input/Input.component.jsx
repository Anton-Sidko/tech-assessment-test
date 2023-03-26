import './Input.styles.scss';

const Input = function ({
  placeholder,
  className,
  label,
  handleChange,
  ...otherProps
}) {
  return (
    <div className="input-group">
      <input
        className={`form-input ${className ? className : ''}`.trim()}
        placeholder={placeholder}
        {...otherProps}
        onChange={handleChange}
      />
      {label && <label>{label}</label>}
    </div>
  );
};

export default Input;

import "./Input.scss";

const Input = ({ inputTitle, name, type, placeholder }) => {
  return (
    <div className="input-group">
      <label>{inputTitle}</label>
      <input name={name} type={type} placeholder={placeholder} required />
    </div>
  );
};

export default Input;

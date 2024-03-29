import "./Button.scss";

const Button = ({ btn_text, classText, classBtn }) => {
  return (
    <button className={classBtn} type="submit">
      <p className={classText}>{btn_text}</p>
    </button>
  );
};

export default Button;

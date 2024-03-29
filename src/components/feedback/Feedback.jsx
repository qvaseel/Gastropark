import "./Feedback.scss";

const Feedback = ({ textName, textDate, textMain, human_logo, stars }) => {
  return (
    <div className="wrapper_feedback">
      <div className="author_review">
        <img src={human_logo} alt="" className="human_logo" />
        <div className="nameAndDate">
          <p className="name">{textName}</p>
          <p className="date">{textDate}</p>
        </div>
        <div className="stars">
          <img src={stars} alt="" className="star_img" />
        </div>
      </div>
      <div className="wrapper_text">
        <p className="main_textFeedback">{textMain}</p>
      </div>
    </div>
  );
};

export default Feedback;

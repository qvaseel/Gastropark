import "./FeedbackCard.scss";
import human_logo1 from "../../img/feedbackHuman_logo/feedback1.svg";
import human_logo2 from "../../img/feedbackHuman_logo/feedback2.svg";
import human_logo3 from "../../img/feedbackHuman_logo/feedback3.svg";
import human_logo4 from "../../img/feedbackHuman_logo/feedback4.svg";
import human_logo5 from "../../img/feedbackHuman_logo/feedback5.svg";
// import stars1 from "../../img/reviews_oneStars.svg";
// import stars2 from "../../img/reviews_twoStars.svg";
// import stars3 from "../../img/reviews_threeStars.svg";
import stars4 from "../../img/reviews_fourStars.svg";
import stars5 from "../../img/reviews_fiveStars.svg";
import Feedback from "../feedback/Feedback";

const FeedbackCard = () => {
  return (
    <div>
      <div className="feedbackCard">
        <h2 className="feedbackCard_Name">Отзывы</h2>
        <div className="scroll_feedback">
          <div className="wrapper_feedback-card">
            <Feedback
              textMain="Заказали на днях с друзьями- Большую сытную тарелку с фалафелем, понравилась, раньше не было в меню, круто что появилась, нам понравилась."
              textName="Анна Клинг"
              textDate="27 сентября 2023"
              human_logo={human_logo1}
              stars={stars5}
            />
          </div>
          <div className="wrapper_feedback-card">
            <Feedback
              textMain="Ребята! Шварма ТОП!! Как человеку, побывавшему во многих странах мира и шаурмечных Челябинска (😅), мне есть с чем сравнить. Редко пишу отзывы, но потрясное сочетание подсоленной розовой капусты, огурчиков, томатов и говядины «вынудило» меня это сделать. Вкусный соус, сочно, большая порция, ингредиентов не пожалели. Продавец-кассир доброжелательна, знает что такое продажи и допродажи. Ещё точно вернусь)"
              textName="Александра Лопан"
              textDate="2 октября 2023"
              human_logo={human_logo2}
              stars={stars5}
            />
          </div>
          <div className="wrapper_feedback-card">
            <Feedback
              textMain="Честно сказать, вкуснее не пробовала ☺️ Это что-то божественное😍 Простое блюдо, но как приготовлено🥹 Персонал прекрасные девушки, все рассказали что входит, как делают, буду пробовать дома, но так вкусно не выйдет, я уверена😂 Спасибо, за прекрасное🤩"
              textName="Бывает Незнаю"
              textDate="21 сентября 2023"
              human_logo={human_logo3}
              stars={stars5}
            />
          </div>
          <div className="wrapper_feedback-card">
            <Feedback
              textMain="Хочу оставить отзыв о шварме с курицей и ореховый соусом. Понравилось необычное сочетание!Очень вкусно,сочно!"
              textName="Маргарита Гумерова"
              textDate="24 сентября 2023"
              human_logo={human_logo4}
              stars={stars5}
            />
          </div>
          <div className="wrapper_feedback-card">
            <Feedback
              textMain="Хумус с фалафелем вкусный, но пита неприятного запаха дрожжей, и добавьте свежих овощей хоть немного, очень сухое блюдо без них"
              textName="Ольга Сокол"
              textDate="11 августа 2023"
              human_logo={human_logo5}
              stars={stars4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

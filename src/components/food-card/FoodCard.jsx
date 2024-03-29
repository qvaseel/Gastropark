import Button from "../button/Button";
import "./FoodCard.scss";

const FoodCard = ({ dishDescription, FoodCard_img, dishName, btn_text }) => {
  return (
    <div className="flex">
      <img src={FoodCard_img} alt="dish" className="dishInFoodCard" />
      <div className="right_side">
        <h3 className="dish_name">{dishName}</h3>
        <div className="description_dish">{dishDescription}</div>
        <Button
          btn_text={btn_text}
          classBtn="btn_plas1"
          classText="text_plas_1"
        />
      </div>
    </div>
  );
};

export default FoodCard;

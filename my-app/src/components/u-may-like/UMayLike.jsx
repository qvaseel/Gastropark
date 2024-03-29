import Button from "../button/Button";
import "./UMayLike.scss";

const UMayLike = ({
  UMayLike_dish_img,
  UMayLike_dish_dishName,
  UMayLike_dish_description,
  btn_text,
}) => {
  return (
    <div className="UMayLike_flex">
      <img
        src={UMayLike_dish_img}
        alt="dish"
        className="UMayLike_dishInFoodCard"
      />
      <div className="UMayLike_right_side">
        <h3 className="UMayLike_dish_name">{UMayLike_dish_dishName}</h3>
        <div className="UMayLike_description_dish">
          {UMayLike_dish_description}
        </div>
        <Button btn_text={btn_text} classBtn="btn" classText="text_plas_1" />
      </div>
    </div>
  );
};

export default UMayLike;

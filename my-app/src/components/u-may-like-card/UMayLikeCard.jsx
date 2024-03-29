import "./UMayLikeCard.scss";
import FoodCard_img15 from "../../img/img-dish/Hummus.svg";
import FoodCard_img13 from "../../img/img-dish/French_fries.svg";
import UMayLike from "../u-may-like/UMayLike";

const UMayLikeCard = () => {
  return (
    <div className="UMayLike_card">
      <div className="TwoCard_UMauLike">
        <div className="mainText_UMayLike">
          <h3>Вам также может понравиться</h3>
        </div>
        <div className="wrapper_UMayLike">
          <UMayLike
            UMayLike_dish_img={FoodCard_img15}
            UMayLike_dish_dishName="Хумус"
            UMayLike_dish_description="Нут, тхина, специи, оливковое масло, лимонный сок"
            btn_text="+ 80"
          />
          <UMayLike
            UMayLike_dish_img={FoodCard_img13}
            UMayLike_dish_dishName="Картофель фри"
            UMayLike_dish_description="Картофель, специи"
            btn_text="+ 145"
          />
        </div>
      </div>
    </div>
  );
};
export default UMayLikeCard;

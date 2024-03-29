import FoodCard_img1 from "../../img/img-dish/Bagel_with_salmon.svg";
import FoodCard_img2 from "../../img/img-dish/Beef_sous_vide.svg";
import FoodCard_img3 from "../../img/img-dish/beverages.svg";
import FoodCard_img7 from "../../img/img-dish/Caesar_salad_from_Jerusalem.svg";
import FoodCard_img9 from "../../img/img-dish/Delicious_dessert.svg";

import "./Basket.scss";
import Header from "../../components/header/Header";
import FoodCard from "../../components/food-card/FoodCard";
import UMayLikeCard from "../../components/u-may-like-card/UMayLikeCard";
import Order from "../../components/order/Order";

const Basket = () => {
  return (
    <>
      <Header />
      <div className="basket-mainContainer">
        <div className="basket-container1">
          <div className="basket-scroll">
            <FoodCard
              FoodCard_img={FoodCard_img1}
              dishName="Бэйгл с лососем"
              dishDescription="Булочка, лист салата, сливочный сыр, лосось, огурец"
              btn_text="- 428р"
            />
            <FoodCard
              FoodCard_img={FoodCard_img2}
              dishName="Говядина су-вид"
              dishDescription="Говядина, специи"
              btn_text="- 104р"
            />
            <FoodCard
              FoodCard_img={FoodCard_img3}
              dishName="Лимонад"
              dishDescription="Напиток собственного производства - домашний Израильский апельсиновый лимонад с мятой"
              btn_text="- 156р"
            />
            <FoodCard
              FoodCard_img={FoodCard_img7}
              dishName="Салат Цезарь из Иерусалима"
              dishDescription="Микс-салат, фалафель, соус цезарь, пармезан, черри, микрозелень, гренки"
              btn_text="- 332р"
            />
            <FoodCard
              FoodCard_img={FoodCard_img9}
              dishName="Вкусный десерт"
              dishDescription="Шоколадный бисквит, сахарный сироп со специями, кедровый орех, базилик свежий, крем на основе вареной сгущенки, сметаны и сливок"
              btn_text="- 184р"
            />
          </div>
        </div>
        <div className="basket-container2">
          <div className="UMayLikeCard_wrapper">
            <UMayLikeCard />
          </div>
          <div className="order">
            <Order prise_text="1204,00 Р" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;

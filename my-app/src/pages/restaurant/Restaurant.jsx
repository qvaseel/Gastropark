import Restaurant_logo from "../../img/shalom_logo.svg";

import "./Restaurant.scss";

import Header from "../../components/header/Header";
import MenuFood from "../../components/menu/Menu";
import RestaurantInfo from "../../components/restaurant-info/RestaurantInfo";
import FeedbackCard from "../../components/feedback-card/FeedbackCard";

const Restaurant = () => {
  return (
    <div>
      <Header />
      <div className="wrapper_all">
        <div className="wrapper_info_food">
          <RestaurantInfo
            kartinka={Restaurant_logo}
            restaurantName="Shalom"
            description="Хумус с яйцом, пита с фалафелем, с курицей и овощами, химин, форшмак, чечевичный и куриный супчики, сладкий бубалех. Шо, вы еще не знаете этих слов?"
          />
          <div className="indent_MenuFood">
            <MenuFood />
          </div>
        </div>
        <FeedbackCard />
      </div>
    </div>
  );
};

export default Restaurant;

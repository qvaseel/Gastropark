import "./RestaurantInfo.scss";

const RestaurantInfo = ({ restaurantName, kartinka, description }) => {
  return (
    <div className="wrapper_restaurant_info">
      <h3 className="Name_restaurant">{restaurantName}</h3>
      <div className="card_wrapper">
        <div className="wrapper_img">
          <img src={kartinka} alt="dish" className="restaurant_img" />
        </div>
        <div className="description">
          <p className="RestaurantInfo_text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;

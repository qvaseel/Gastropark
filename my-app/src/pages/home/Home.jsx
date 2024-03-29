import "./Home.scss";
import Header from "../../components/header/Header";
import pokemania_logo from "../../img/pokemania_logo.svg";
import shalom_logo from "../../img/shalom_logo.svg";
import andrewbaker_logo from "../../img/andrewbaker_logo.svg";
import trdelnik_logo from "../../img/trdelnik_logo.svg";
import Select from "../../components/select/Select";
import map from "../../img/map.svg";
import { Link } from "react-router-dom";
import ROUTER from "../../router/router";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="home_main">
        <div className="home_restcont">
          <div className="home_logos">
            <img src={pokemania_logo} alt="logo" className="home_logo" />
            <Link to={ROUTER.KORNER} className="home_logo">
              <img src={shalom_logo} alt="logo" className="home_logo" />
            </Link>
            <img src={andrewbaker_logo} alt="logo" className="home_logo" />
            <img src={trdelnik_logo} alt="logo" className="home_logo" />
          </div>
        </div>
        <div className="home_wiw">
          <div className="zag">
            <h1 className="home_h1">Что я хочу?</h1>
            <div>
              <Select />
            </div>
          </div>
          <p className="align"><img src={map} alt="" className="map" /></p>
        </div>
      </div>
    </div>
  );
};

export default Home;

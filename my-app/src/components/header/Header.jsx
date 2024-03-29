import "./Header.scss";
import Input from "../input/Input";
import logo from "../../img/gastropark_logo.svg";
import basket from "../../img/basket.svg";
import { Link } from "react-router-dom";
import ROUTER from "../../router/router";

const Header = () => {
  return (
    <div className="head">
      <div className="nav">
        <div>
        <Link to={ROUTER.HOME} className="logo_width">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        </div>
        <div className="inp_bask">
          <Input name="text" type="text" placeholder="поиск" />
          <Link to={ROUTER.BASKET}>
            <img src={basket} alt="basket" className="basket" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import "./Order.scss";
import Button from "../button/Button";

const Order = ({ prise_text }) => {
  return (
    <>
      <div className="wrapper_order">
        <p className="basket-order">Оформить заказ:</p>
        <p className="basket-price" id="basket-price">
          {prise_text}
        </p>
        <div className="btn_order">
          <Button
            btn_text="Заказать"
            id="basket-send"
            classBtn="btn_big"
            classText="text_btn_big"
          />
        </div>
      </div>
    </>
  );
};

export default Order;

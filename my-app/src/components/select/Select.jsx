import "./Select.scss";

const Select = () => {
  return (
    <div className="select-group">
      <select name="kitchens" id="kitchens">
        <option value="#"></option>
        <option value="asian">Азиатская кухня</option>
        <option value="american">Американская кухня</option>
        <option value="burgers">Бургеры</option>
        <option value="eastern">Восточная кухня</option>
        <option value="vietnamese">Вьетнамская кухня</option>
        <option value="bakery">Выпечка</option>
        <option value="hawaiian">Гавайская кухня</option>
        <option value="georgian">Грузинская кухня</option>
        <option value="mexican">Мексиканская кухня</option>
        <option value="seafood">Морепродукты</option>
        <option value="drinks">Напитки</option>
        <option value="pizza">Пицца</option>
        <option value="steaks">Стейки</option>
        <option value="uzbek">Узбекская кухня</option>
      </select>
    </div>
  );
};

export default Select;

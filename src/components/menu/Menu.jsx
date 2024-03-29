import FoodCard from "../food-card/FoodCard";
import "./Menu.scss";

import FoodCard_img1 from "../../img/img-dish/Bagel_with_salmon.svg";
import FoodCard_img2 from "../../img/img-dish/Beef_sous_vide.svg";
import FoodCard_img3 from "../../img/img-dish/beverages.svg";
import FoodCard_img4 from "../../img/img-dish/beverages.svg";
import FoodCard_img5 from "../../img/img-dish/beverages.svg";
import FoodCard_img6 from "../../img/img-dish/Branded_cheesecakes.svg";
import FoodCard_img7 from "../../img/img-dish/Caesar_salad_from_Jerusalem.svg";
import FoodCard_img8 from "../../img/img-dish/Cream_soup_with_salmon.svg";
import FoodCard_img9 from "../../img/img-dish/Delicious_dessert.svg";
import FoodCard_img10 from "../../img/img-dish/Esik-fleisch.svg";
import FoodCard_img11 from "../../img/img-dish/Falafel.svg";
import FoodCard_img12 from "../../img/img-dish/Falafel_salad.svg";
import FoodCard_img13 from "../../img/img-dish/French_fries.svg";
import FoodCard_img14 from "../../img/img-dish/Hearty_plate.svg";
import FoodCard_img15 from "../../img/img-dish/Hummus.svg";
import FoodCard_img16 from "../../img/img-dish/Hummus_with_beef.svg";
import FoodCard_img17 from "../../img/img-dish/Hummus_with_falafel.svg";
import FoodCard_img18 from "../../img/img-dish/Lentil_soup.svg";
import FoodCard_img19 from "../../img/img-dish/Mushroom_cream_soup.svg";
import FoodCard_img20 from "../../img/img-dish/Nuggets_with_fries.svg";
import FoodCard_img21 from "../../img/img-dish/Pete.svg";
import FoodCard_img22 from "../../img/img-dish/Roast_beef_salad_from_Tel-Aviv.svg";
import FoodCard_img23 from "../../img/img-dish/Schnitzel_from_Haifa.svg";
import FoodCard_img24 from "../../img/img-dish/Shakshuka_Classic.svg";
import FoodCard_img25 from "../../img/img-dish/Shawarma.svg";

const MenuFood = () => {
  return (
    <div className="field">
      <h3 className="NameComponents">Меню</h3>
      <div className="dishes">
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img1}
            dishName="Бэйгл с лососем"
            dishDescription="Булочка, лист салата, сливочный сыр, лосось, огурец"
            btn_text="+ 428р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img2}
            dishName="Говядина су-вид"
            dishDescription="Говядина, специи"
            btn_text="+ 104р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img3}
            dishName="Лимонад"
            dishDescription="Напиток собственного производства - домашний Израильский апельсиновый лимонад с мятой"
            btn_text="+ 156р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img4}
            dishName="Морс Облепиха-розмарин"
            dishDescription="Облепиха, розмарин, сахар, вода. Напиток собственного производства"
            btn_text="+ 160р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img5}
            dishName="Морс Вишня с базиликом"
            dishDescription="Напиток собственного производства"
            btn_text="+ 160р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img6}
            dishName="Фирменные сырники"
            dishDescription=""
            btn_text="+ 175р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img7}
            dishName="Салат Цезарь из Иерусалима"
            dishDescription="Микс-салат, фалафель, соус цезарь, пармезан, черри, микрозелень, гренки"
            btn_text="+ 332р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img8}
            dishName="Крем-суп с лососем"
            dishDescription="Лосось, овощи, микрозелень, сливки, пита, зеленое масло"
            btn_text="+ 312р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img9}
            dishName="Вкусный десерт"
            dishDescription="Шоколадный бисквит, сахарный сироп со специями, кедровый орех, базилик свежий, крем на основе вареной сгущенки, сметаны и сливок"
            btn_text="+ 184р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img10}
            dishName="Эсик-флейш"
            dishDescription="Овощи, нут, говядина, чернослив, специи, салат из свежих овощей, маринованный огурец, пита"
            btn_text="+ 400р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img11}
            dishName="Фалафель"
            dishDescription="Нут, свежая зелень, специи, лук, чеснок"
            btn_text="+ 60р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img12}
            dishName="Салат с фалафелем"
            dishDescription="Микс салатных листьев, свежий базилик, огурец свежий, свекла отварная, адыгейский сыр жареный, фалафель, салатная заправка (добавки на выбор)"
            btn_text="+ 296р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img13}
            dishName="Картофель фри"
            dishDescription="Картофель, специи"
            btn_text="+ 145р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img14}
            dishName="Большая сытная тарелка говядина су-вид"
            dishDescription="Лаваш, говядина су-вид, салат овощной Арави, салат Иерусалимская смесь, соус ореховый Тахини, специи, картофель фри"
            btn_text="+ 432р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img15}
            dishName="Хумус"
            dishDescription="Нут, тхина, специи, оливковое масло, лимонный сок"
            btn_text="+ 80р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img16}
            dishName="Хумус с говядиной су-вид"
            dishDescription="Хумус, говядина су-вид, лук жареный, салат Арави, Иерусалимская смесь, пита, микрозелень"
            btn_text="+ 360р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img17}
            dishName="Хумус с фалафелем"
            dishDescription="Хумус, фалафель, ореховая Тахини, салат из битых огурцов, микрозелень, пита"
            btn_text="+ 312р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img18}
            dishName="Суп Чечевичный"
            dishDescription="Чечевица, лук, чеснок, имбирь, сливки, томаты, соус чесночный, специи, пита"
            btn_text="+ 292р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img19}
            dishName="Грибной крем-суп"
            dishDescription="Грибы, картофель, сливки, пита, микрозелень"
            btn_text="+ 288р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img20}
            dishName="Наггетсы с картофелем фри"
            dishDescription="Наггетсы с картофелем фри"
            btn_text="+ 312р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img21}
            dishName="Пита"
            dishDescription="Мука пшеничная, вода, соль, сахар, дрожжи"
            btn_text="+ 60р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img22}
            dishName="Салат с ростбифом из Тель-Авива"
            dishDescription="Микс-салат, ростбиф, горчичный соус, сыр сливочный, черри, микрозелень"
            btn_text="+ 424р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img23}
            dishName="Шницель из Хайфы"
            dishDescription="Филе куриной грудки, яйцо, панка, специи, соль, салат сезонных овощей Арави (огурец, помидор, масло, специи), картофель фри, ореховый соус"
            btn_text="+ 464р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img24}
            dishName="Шакшука Классическая"
            dishDescription="Перец болгарский, томаты, лук, чеснок, специи, яйцо"
            btn_text="+ 332р"
          />
        </div>
        <div className="wrapper_menu">
          <FoodCard
            FoodCard_img={FoodCard_img25}
            dishName="Шаурма с курицей су-вид"
            dishDescription="Лаваш, хумус, овощной салат арави (огурец, помидоры, заправка для арави), салат иерусалимская смесь (маринованный огурец, корейская морковь, микс красной и белой маринованной капусты), курица-кебаб, соус ореховый тахини, соус чесночный с зеленью, соус красный"
            btn_text="+ 304р"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuFood;

import { CDN_URL } from "../../utils/constants";
import "./itemList.scss";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="item-container">
          <div className="span-container">
            <span>{item.card.info.name} </span>
            <span>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p>{item.card.info.description}</p>
          </div>
          <div className="img-cont">
            <img src={CDN_URL + item.card.info.imageId} alt="hhhhh" />
            <button>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

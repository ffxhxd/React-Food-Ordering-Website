import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import "./itemList.scss";
import { addItem } from "../../utils/Redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch action
    // whatever we pass in additem that is our payload (action.payload) whenever we will call this it will create an object and it will create a
    //payload inside this object and it will add  whatever data we have added to this object and will take this object and pass as second argument in out additem function
    dispatch(addItem(item));
  };

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
            <button
              onClick={
                //passing a callback function
                () => handleAddItem(item)
              }
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

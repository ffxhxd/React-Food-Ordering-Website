import React, { useState } from "react";
import "./Accordian.scss";
import ItemList from "./ItemList";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [showCards, setShowCards] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setShowCards(!showCards);
  };
  return (
    <div className="big">
      <div className="accordian-container" onClick={handleClick}>
        <div className="acc-head">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            {showCards ? (
              <MdKeyboardArrowUp size={30} className="downicon" />
            ) : (
              <MdKeyboardArrowDown size={30} className="downicon" />
            )}
          </span>
        </div>
        <div>
          {" "}
          {showItems && showCards && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;

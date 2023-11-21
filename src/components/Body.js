import RestaurantCard from "./ResturantCard";
import { resObj } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState(resObj);

  return (
    <div className="body-container">
      <div className="search-bar">
        <button
          onClick={() => {
            setListOfResturants(
              listOfResturants.filter((res) => res.info.avgRating > 3.5)
            );
          }}
          className="filter-btn"
        >
          Fiter Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((curr) => (
          <RestaurantCard key={curr.info.id} resData={curr} />
        ))}
      </div>
    </div>
  );
};

export default Body;

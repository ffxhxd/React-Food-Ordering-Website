import RestaurantCard from "./ResturantCard";
import { resObj } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">Search</div>
      <div className="res-container">
        {/* <RestaurantCard
            //we can pass resturant data object drectly
            //resObj is a java script object //array of objects
            //this resdata key will go up as prop
            resData={resObj[10]}
          /> */}

        {/* //looping over array and create card for each element */}

        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

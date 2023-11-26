import RestaurantCard, {
  withPromotedLabel,
} from "../ResturantCard/ResturantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import "./body.scss";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body-container">
      <div className="btns-container">
        <div className="inp-btn">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              setToggle(!toggle);

              setSearchText("");

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            {toggle ? <GrPowerReset size={40} /> : <FaSearch size={40} />}
          </button>
        </div>
        <div className="twobtns">
          <button
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
            className="filter-top"
          >
            Top Rated
          </button>
          <button
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 0
              );
              setFilteredRestaurant(filteredList);
            }}
            className="filter-top"
          >
            All
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

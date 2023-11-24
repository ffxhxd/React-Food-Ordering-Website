import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL, CDN_URL } from "../../utils/constants";
import "./restaurantMenu.scss";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <div>Loading.......</div>;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return (
    <div className="restaurant-menu">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res iamge"
        className="menu-image"
      ></img>
      <h1>{name}</h1>
      <hr />
      <h2>Cuisines: {cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>MENU</h2>
      <hr />
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            <span>
              {" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            .
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

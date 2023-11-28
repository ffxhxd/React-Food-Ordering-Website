import UserContext from "../../utils/Context/UserContext";
import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
//import "./resturantCards.scss";

const RestaurantCard = (props) => {
  const data = useContext(UserContext);

  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, avgRating, costForTwo, sla } = resData;

  return (
    <div className="res-card">
      <div className="card-image">
        <img src={CDN_URL + cloudinaryImageId} alt="restimage"></img>
      </div>

      <div className="res-data">
        <h1>{name}</h1>
        <h3 className="rating-box">{avgRating}⭐</h3>
        <h3>Delivery Time: {sla?.slaString}</h3>
        <h3>{costForTwo}</h3>
        <h3>{data.loggedInUser}</h3>
      </div>
    </div>
  );
};

//higher order component

//input -> RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label
          style={{
            position: "absolute",
            marginLeft: "11px",
            marginTop: "2px",
            background: "#333",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "15px",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
            boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          OPEN NOW
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

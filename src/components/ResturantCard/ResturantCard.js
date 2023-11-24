import { CDN_URL } from "../../utils/constants";
import "./resturantCards.scss";

const RestaurantCard = (props) => {
  const { resData } = props;
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
      </div>
    </div>
  );
};

export default RestaurantCard;

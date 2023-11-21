import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, locality } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="card-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restimage"
      ></img>

      <div className="res-data">
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}⭐</h4>
        <h4>Address: {locality}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;

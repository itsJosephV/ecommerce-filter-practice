// import data from "../data";
import "./Card.css";
import { BagIcon } from "../../icons/BagIcon";
import { StarIcon } from "../../icons/StarIcon";
import { ItemProps } from "../../types";

const Card = ({ item }: { item: ItemProps }) => {
  return (
    <div className="card-item">
      <img className="card-img" src={item.img} alt="" />
      <div className="card-details">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-reviews">
          <div className="stars-container">
            <StarIcon className="star-icon" />
            <StarIcon className="star-icon" />
            <StarIcon className="star-icon" />
            <StarIcon className="star-icon" />
          </div>
          <span className="total-reviews">{item.reviews}</span>
        </div>
        <div className="item-price">
          <div className="price">
            <del>{item.prevPrice}</del>
            <span>{item.newPrice}</span>
          </div>
          <button onClick={() => console.log("clicked")} className="card-btn">
            <BagIcon className="bag-icon" />
            <span>Buy now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

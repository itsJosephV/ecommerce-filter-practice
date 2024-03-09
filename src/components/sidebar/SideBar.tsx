import { ShopIcon } from "../../icons/ShopIcon";
import Footer from "../footer/Footer";
import "./SideBar.css";
import Category from "./category/Category";
import Colors from "./colors/Colors";
import Price from "./price/Price";
import { HandlerProps } from "../../types";

const SideBar = ({ handleChange }: { handleChange: HandlerProps }) => {
  return (
    <section className="section-container">
      <div className="sidebar-container">
        <div className="intro-section">
          <div className="intro-logo-container">
            <ShopIcon className="shooshop-icon" />
            ShooShop
          </div>
          <p className="intro-text">Your favorite shoe shop!</p>
        </div>
        <div className="sidebar-content">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SideBar;

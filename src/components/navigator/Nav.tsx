import { CartIcon } from "../../icons/CartIcon";
import { HeartIcon } from "../../icons/HeartIcon";
import { UserIcon } from "../../icons/UserIcon";
import "./Nav.css";

type Props = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
};

const Nav = ({ handleInputChange, query }: Props) => {
  return (
    <nav className="nav-container">
      <div>
        <input
          onChange={handleInputChange}
          value={query}
          type="text"
          className="search-input"
          placeholder="Enter your search"
        />
      </div>
      <div className="profile-container">
        <a href="">
          <CartIcon className="nav-icons" />
        </a>
        <a href="">
          <HeartIcon className="nav-icons" />
        </a>
        <a href="">
          <UserIcon className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

// display: flex;
// justify-content: center;

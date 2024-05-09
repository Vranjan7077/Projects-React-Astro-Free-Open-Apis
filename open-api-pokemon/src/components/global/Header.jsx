import "./_index.scss";
import { Link } from "react-router-dom";
import { HEADER_IMAGE_URL } from "../../utils/constants";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={HEADER_IMAGE_URL} width={250} height={92} loading="lazy" />
      </Link>
      <div>
        <p>
          Pokemon is a popular multimedia franchise centered around capturing,
          training, and battling creatures called Pokemon.
        </p>
      </div>
    </header>
  );
};

export default Header;

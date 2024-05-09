import "./_index.scss";
import { Link } from "react-router-dom";
import { FOOTER_IMAGE_URL, API } from "../../utils/constants";

const Footer = () => {
  return (
    <footer>
      <Link to={API}>
        <img src={FOOTER_IMAGE_URL} width={250} height={92} loading="lazy" />
      </Link>
      <div>
        <h2>The RESTful Pokémon API </h2>
        <p>Serving over 1,000,000,000 API calls each month!</p>
      </div>
    </footer>
  );
};

export default Footer;

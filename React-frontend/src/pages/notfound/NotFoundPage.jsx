import "./NotFoundPage.css";
import { Link } from "react-router";
import { Header } from "../../components/Header";

const NotFoundPage = ({ cart }) => {
  return (
    <>
      <Header cart={cart} />
      <div className="amazon-notfound-container">
        <div className="amazon-notfound-card">
          <h1 className="amazon-notfound-code">404</h1>

          <h2 className="amazon-notfound-title">
            Sorry! We can’t find that page
          </h2>

          <p className="amazon-notfound-text">
            The page you’re looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link to="/" className="amazon-notfound-button">
            Go to Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

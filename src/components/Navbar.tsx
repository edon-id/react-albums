import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="container-nav">
        <Link to="/" className="navbar-brand">
          MUSIC DB
        </Link>
      </div>
    </nav>
  );
};

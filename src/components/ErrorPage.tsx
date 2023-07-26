import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="text-center ErrorPage">
      <h2>Error 404</h2>
      <p>Click on the link to go back to home page</p>
      <Link className="link" to="/">Homepage</Link>
    </div>
  );
};

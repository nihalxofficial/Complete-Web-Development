// NotFound.js
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="text-center space-y-2 mt-7">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button className="btn bg-purple-500 text-white">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

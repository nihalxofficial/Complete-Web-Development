import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="card bg-base-100 shadow-sm">
      <figure className="">
        <img src={app.image} alt={app.title} className="h-[200px] w-auto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>
        <div className="flex justify-between items-center gap-4">
          <span className="bg-green-100 text-green-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
            <FaDownload /> {app.downloads}
          </span>
          <span className="bg-orange-100 text-orange-500 flex items-center gap-1 py-1 px-2 font-semibold rounded-md">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

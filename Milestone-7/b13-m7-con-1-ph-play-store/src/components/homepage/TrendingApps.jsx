import React, { use, useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import AppCard from "../ui/AppCard";
import { HashLoader } from "react-spinners";
import { Link } from "react-router";
import useApps from "../../hooks/useApps";
// import { useLoaderData } from "react-router";

// const appsPromise = fetch("/data.json").then((res) => res.json());

const TrendingApps = () => {
  //   const apps = use(appsPromise);
  //   console.log(apps, "apps");

  //   const data = useLoaderData();
  //   console.log(data, "data from homepage");

  const { apps, loading } = useApps();

  return (
    <div className="container mx-auto my-[60px]">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-bold text-4xl">Trending apps</h2>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          reiciendis eos laborum tempore quis hic quod cupiditate, consequuntur
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <HashLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {apps.slice(0, 9).map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}

      <div className="text-center mt-4">
        <Link to={"/apps"}>
          <button className="btn bg-purple-500 text-white">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;

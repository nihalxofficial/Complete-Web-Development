import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import useApps from "../../hooks/useApps";
import AppCard from "../../components/ui/AppCard";

const Apps = () => {
  const { apps, loading } = useApps();

  console.log(apps, loading);

  return (
    <div className="container mx-auto my-10">
      {/* Section header */}
      <div className="mb-12 text-center max-w-[50%] mx-auto">
        <h2 className="font-bold text-4xl">All apps</h2>
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
          {apps.map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Apps;

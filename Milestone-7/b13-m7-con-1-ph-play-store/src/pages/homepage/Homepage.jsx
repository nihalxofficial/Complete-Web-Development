import React from "react";
import Banner from "../../components/homepage/Banner";
import Stats from "../../components/homepage/Stats";
import TrendingApps from "../../components/homepage/TrendingApps";
import { useLoaderData } from "react-router";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Stats />
      <TrendingApps />
    </>
  );
};

export default Homepage;

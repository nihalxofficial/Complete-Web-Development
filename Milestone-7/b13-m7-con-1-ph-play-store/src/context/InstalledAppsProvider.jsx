import { useState } from "react";
import { InstallAppsContext } from "./InstallAppsContext";

const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const data = {
    installedApps,
    setInstalledApps,
  };

  return (
    <InstallAppsContext.Provider value={data}>
      {children}
    </InstallAppsContext.Provider>
  );
};

export default InstalledAppsProvider;

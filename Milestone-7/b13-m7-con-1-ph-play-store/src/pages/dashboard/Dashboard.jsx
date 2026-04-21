import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { useContext } from "react";
import useApps from "../../hooks/useApps";

const Dashboard = () => {
  const { installedApps } = useContext(InstallAppsContext);
  const { apps, loading } = useApps();
  console.log(apps, "apps");
  const uninstalledAppsLength = apps.length - installedApps.length;
  console.log(uninstalledAppsLength, installedApps.length, "uninstalledApps");

  const data = [
    { name: "Installed", value: installedApps.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#FF8042" },
  ];

  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Installed and uninstalled apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;

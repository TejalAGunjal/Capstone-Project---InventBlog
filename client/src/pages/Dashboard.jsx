import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar/DashSidebar";
import DashProfile from "../components/DashProfile/DashProfile";
import DashPosts from "../components/DashPosts/DashPosts";
import DashUsers from "../components/DashUsers/DashUsers";
import DashComments from "../components/DashComments/DashComments";
import DashboardComp from "../components/DashboardComp/DashboardComp";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* posts... */}
      {tab === "posts" && <DashPosts />}
      {/* users... */}
      {tab === "users" && <DashUsers />}
      {/* Comments... */}
      {tab === "comments" && <DashComments />}
      {/* Dashboard... */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
}

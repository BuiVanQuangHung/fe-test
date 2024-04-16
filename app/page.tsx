"use client";

import RevenueChart from "@/components/dashboard/RevenueChart";
import SubscriptionChart from "@/components/dashboard/SubscriptionChart";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Dashboard = () => {
  //! State
  const [activeTab, setActiveTab] = useState("subscription");
  const checkActive = activeTab === "subscription";
  //! Function
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  //! Render
  return (
    <section>
      <p className="text-blue-500 text-2xl font-bold">Dashboard</p>
      <div className="flex gap-3 ml-5 mt-5">
        <button
          className={cn(
            "border border-indigo-600 px-3 py-1 rounded cursor-pointer",
            { "bg-blue-500 text-white": checkActive }
          )}
          onClick={() => handleTabChange("subscription")}
        >
          Subscription
        </button>
        <button
          className={cn(
            "border border-indigo-600 px-3 py-1 rounded cursor-pointer",
            { "bg-blue-500 text-white": !checkActive }
          )}
          onClick={() => handleTabChange("revenue")}
        >
          Revenue
        </button>
      </div>
      <div className="flex space-x-4 ml-5 mt-5 w-[70vw] min-h-[70vh]">
        {activeTab === "subscription" && <SubscriptionChart />}
        {activeTab === "revenue" && <RevenueChart />}
      </div>
    </section>
  );
};

export default Dashboard;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { dataBarChart, optionsBarChart } from "@/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RevenueChart = () => {
  //! State

  //! Render
  return (
    <div className="w-full">
      <Bar data={dataBarChart} options={optionsBarChart} />
    </div>
  );
};

export default RevenueChart;

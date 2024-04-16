export const sideBarLink = [
  {
    label: "Dashboard",
    route: "/",
  },
  {
    label: "Post Management",
    route: "/postManagement",
  },
  {
    label: "Settings",
    route: "/settings",
  },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Average High $ Low Temperature",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const fakerNumberHigh = [28, 29, 33, 36, 32, 32, 33];
const fakerNumberLow = [12, 11, 14, 18, 17, 13, 13];
const fakerNumberRandom = [20, 3, 52, 80, 13, 78, 2];

export const dataLineChart = {
  labels,
  datasets: [
    {
      label: "High -2013",
      data: fakerNumberHigh,
      borderColor: "blue",
      backgroundColor: "blue",
    },
    {
      label: "Low - 2013",
      data: fakerNumberLow,
      borderColor: "black",
      backgroundColor: "black",
    },
  ],
};

export const optionsBarChart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart",
    // },
  },
};

export const dataBarChart = {
  labels,
  datasets: [
    {
      label: "",
      data: fakerNumberHigh,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "",
      data: fakerNumberRandom,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

import forecasts from "/src/json/forecasts.json";
import sales from "/src/json/sales.json";
import { Chart, registerables } from "chart.js";

const canvas = document.getElementById("chartSales");
const arrayForecasts = [...forecasts.monthlyForecasts];
const arraySales = [...sales.monthlySales];

Chart.register(...registerables);
new Chart(canvas.getContext("2d"), {
  type: "line",
  options: {
    plugins: {
      title: {
        display: true,
        text: "Annual Forecast",
        font: {
          size: 40,
        },
      },
    },
  },
  data: {
    datasets: [
      {
        type: "bar",
        label: "Monthly sales",
        data: arraySales,
        backgroundColor: "rgba(0, 158, 107, 0.7)",
        borderRadius: 10,
      },
      {
        type: "line",
        label: "Sales forecast",
        data: arrayForecasts,
        backgroundColor: "rgba(128, 0, 128, 0.2)",
        borderColor: "rgba(128, 0, 128, 1)",
        borderWidth: 3,
        pointBackgroundColor: "black",
        pointBorderColor: "black",
        pointRadius: 5,
      },
    ],
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
});

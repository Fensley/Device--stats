var xValues = ["Desktop", "Mobile", "tablet"];
var yValues = [55, 49, 44];
var barColors = ["#b91d47", "#6051e5", "#2981e7"];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Last 7 days",
    },
  },
});

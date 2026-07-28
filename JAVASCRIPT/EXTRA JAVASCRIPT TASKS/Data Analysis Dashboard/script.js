import { dataset } from "./dataset.js";

const totalSalesEl = document.getElementById("totalSales");
const totalProfitEl = document.getElementById("totalProfit");
const avgSalesEl = document.getElementById("avgSales");
const avgProfitEl = document.getElementById("avgProfit");
const maxSaleEl = document.getElementById("maxSale");
const minSaleEl = document.getElementById("minSale");
const tbody = document.getElementById("tableBody");

const monthFilter = document.getElementById("monthFilter");
const regionFilter = document.getElementById("regionFilter");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchBox");
const resetBtn = document.getElementById("resetBtn");

let barChart, lineChart, pieChart, doughnutChart;

function updateDashboard(data) {
  let totalSales = 0;
  let totalProfit = 0;
  let maxSale = 0;
  let minSale = 0;

  // set initial values for min/max
  if (data.length > 0) {
    maxSale = data[0].sales;
    minSale = data[0].sales;
  }

  // calculate totals
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    totalSales += item.sales;
    totalProfit += item.profit;

    if (item.sales > maxSale) {
      maxSale = item.sales;
    }
    if (item.sales < minSale) {
      minSale = item.sales;
    }
  }

  let avgSales = 0;
  let avgProfit = 0;

  if (data.length > 0) {
    avgSales = totalSales / data.length;
    avgProfit = totalProfit / data.length;
  }

  // update cards
  totalSalesEl.innerText = "$" + totalSales.toLocaleString();
  totalProfitEl.innerText = "$" + totalProfit.toLocaleString();
  avgSalesEl.innerText = "$" + Math.round(avgSales).toLocaleString();
  avgProfitEl.innerText = "$" + Math.round(avgProfit).toLocaleString();
  maxSaleEl.innerText = "$" + maxSale.toLocaleString();
  minSaleEl.innerText = "$" + minSale.toLocaleString();

  renderTable(data);
  renderCharts(data);
}

function renderTable(data) {
  tbody.innerHTML = "";

  data.forEach((item) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.month}</td>
      <td>${item.region}</td>
      <td>${item.category}</td>
      <td>${item.product}</td>
      <td>$${item.sales.toLocaleString()}</td>
      <td>$${item.profit.toLocaleString()}</td>
    `;
    tbody.appendChild(tr);
  });
}

// helper function to manually group chart data
function groupData(data, key) {
  let result = {};
  for (let i = 0; i < data.length; i++) {
    let val = data[i][key];
    if (!result[val]) {
      result[val] = 0;
    }
    result[val] += data[i].sales;
  }
  return result;
}

function renderCharts(data) {
  let products = [];
  let productSales = [];

  for (let i = 0; i < data.length; i++) {
    products.push(data[i].product);
    productSales.push(data[i].sales);
  }

  let monthData = groupData(data, "month");
  let categoryData = groupData(data, "category");
  let regionData = groupData(data, "region");

  // get rid of old charts if they exist so they don't overlap
  if (barChart) barChart.destroy();
  if (lineChart) lineChart.destroy();
  if (pieChart) pieChart.destroy();
  if (doughnutChart) doughnutChart.destroy();

  barChart = new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: products,
      datasets: [
        { label: "Sales ($)", data: productSales, backgroundColor: "#2563eb" },
      ],
    },
  });

  lineChart = new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: Object.keys(monthData),
      datasets: [
        {
          label: "Sales ($)",
          data: Object.values(monthData),
          borderColor: "#10b981",
          fill: false,
          tension: 0.1,
        },
      ],
    },
  });

  pieChart = new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: Object.keys(categoryData),
      datasets: [
        {
          data: Object.values(categoryData),
          backgroundColor: ["#ef4444", "#3b82f6", "#f59e0b"],
        },
      ],
    },
  });

  doughnutChart = new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels: Object.keys(regionData),
      datasets: [
        {
          data: Object.values(regionData),
          backgroundColor: ["#8b5cf6", "#ec4899", "#14b8a6", "#f97316"],
        },
      ],
    },
  });
}

function handleFilter() {
  let m = monthFilter.value;
  let r = regionFilter.value;
  let c = categoryFilter.value;
  let search = searchInput.value.toLowerCase();

  let filtered = dataset.filter((item) => {
    let matchMonth = m === "All" || item.month === m;
    let matchRegion = r === "All" || item.region === r;
    let matchCategory = c === "All" || item.category === c;
    let matchSearch = item.product.toLowerCase().includes(search);

    return matchMonth && matchRegion && matchCategory && matchSearch;
  });

  updateDashboard(filtered);
}

// event listeners
monthFilter.addEventListener("change", handleFilter);
regionFilter.addEventListener("change", handleFilter);
categoryFilter.addEventListener("change", handleFilter);
searchInput.addEventListener("keyup", handleFilter);

resetBtn.addEventListener("click", () => {
  monthFilter.value = "All";
  regionFilter.value = "All";
  categoryFilter.value = "All";
  searchInput.value = "";

  updateDashboard(dataset);
});

// start the app
updateDashboard(dataset);

import { dataset } from "./dataset"
console.log(dataset);

const totalSalesElement = document.getElementById("totalSales");
const totalProfitElement = document.getElementById("totalProfit");
const avgSalesElement = document.getElementById("avgSales");
const avgProfitElement = document.getElementById("avgProfit");
const maxSaleElement = document.getElementById("maxSale");
const minSaleElement = document.getElementById("minSale");
const tableBody = document.getElementById("tableBody");
const monthFilter = document.getElementById("monthFilter");
const regionFilter = document.getElementById("regionFilter");
const categoryFilter = document.getElementById("categoryFilter");
const searchBox = document.getElementById("searchBox");
const resetBtn = document.getElementById("resetBtn");


// DISPLAY DASHBOARD DATA


function updateDashboard(data){


    let totalSales = 0;
    let totalProfit = 0;

    let maxSale = data[0]?.sales || 0;
    let minSale = data[0]?.sales || 0;


    // LOOP FOR CALCULATIONS

    for(let item of data){

        totalSales += item.sales;

        totalProfit += item.profit;

        if(item.sales > maxSale){

            maxSale = item.sales;

        }


        if(item.sales < minSale){

            minSale = item.sales;

        }


    }


    let averageSales = data.length ? 
    totalSales / data.length : 0;


    let averageProfit = data.length ?
    totalProfit / data.length : 0;



    // UPDATE KPI CARDS

    totalSalesElement.innerHTML =
    "$" + totalSales.toLocaleString();


    totalProfitElement.innerHTML =
    "$" + totalProfit.toLocaleString();


    avgSalesElement.innerHTML =
    "$" + Math.round(averageSales).toLocaleString();


    avgProfitElement.innerHTML =
    "$" + Math.round(averageProfit).toLocaleString();


    maxSaleElement.innerHTML =
    "$" + maxSale.toLocaleString();


    minSaleElement.innerHTML =
    "$" + minSale.toLocaleString();



    displayTable(salesData);


    updateCharts(salesData);

}



// DISPLAY TABLE


function displayTable(data){


    tableBody.innerHTML = "";


    for(let item of data){


        let row = `

        <tr>

        <td>${item.id}</td>

        <td>${item.month}</td>

        <td>${item.region}</td>

        <td>${item.category}</td>

        <td>${item.product}</td>

        <td>$${item.sales.toLocaleString()}</td>

        <td>$${item.profit.toLocaleString()}</td>


        </tr>

        `;


        tableBody.innerHTML += row;


    }


}



// FILTER FUNCTION



function filterData(){


    let selectedMonth = monthFilter.value;

    let selectedRegion = regionFilter.value;

    let selectedCategory = categoryFilter.value;

    let searchText = searchBox.value.toLowerCase();



    let filteredData = [];


    // LOOP THROUGH DATA

    for(let item of salesData){

        let matchMonth =
        selectedMonth === "All" ||
        item.month === selectedMonth;

        let matchRegion =
        selectedRegion === "All" ||
        item.region === selectedRegion;

        let matchCategory =
        selectedCategory === "All" ||
        item.category === selectedCategory;

        let matchSearch =
        item.product
        .toLowerCase()
        .includes(searchText);


        if(
            matchMonth &&
            matchRegion &&
            matchCategory &&
            matchSearch
        ){

            filteredData.push(item);

        }


    }


    updateDashboard(filteredData);


}




// EVENT LISTENERS


monthFilter.addEventListener("change",filterData);


regionFilter.addEventListener("change",filterData);


categoryFilter.addEventListener("change",filterData);


searchBox.addEventListener("keyup",filterData);


// RESET FILTERS


resetBtn.addEventListener("click",()=>{


    monthFilter.value="All";

    regionFilter.value="All";

    categoryFilter.value="All";

    searchBox.value="";


    updateDashboard(salesData);


});




// INITIAL LOAD


updateDashboard(salesData);
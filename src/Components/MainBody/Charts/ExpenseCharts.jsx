// import React from "react";
import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";
import "./ExpenseChart.css";
import ChartFilterYearly from "./ChartFilterYearly";
// import ChartFilterMonthly from "./ChartFilterMonthly";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function ExpenseCharts({ expenses }) {
  const yearlyMap = {};
  const monthlyMap = Array(12).fill(0);

  //  yearly and monthly
  expenses.forEach(({ date, price }) => {
    if (!date) return;
    const [year, monthStr] = date.split("-");
    const amount = parseFloat(price) || 0;

    // Yearly mapping
    yearlyMap[year] = (yearlyMap[year] || 0) + amount;

    // Monthly mapping
    const monthIndex = parseInt(monthStr, 10) - 1;
    if (monthIndex >= 0 && monthIndex < 12) {
      monthlyMap[monthIndex] += amount;
    }
  });
  // console.log(expenses);

  const sortedYears = Object.keys(yearlyMap).sort();
  const yearlyPrices = sortedYears.map((year) => yearlyMap[year]);






  // yearly chart filter handle
  const [chartSelectedYear, setChartSelectedYear] = useState("All");

  // getting year from child
  function handleChartFilter(year) {
    // console.log(year);
    setChartSelectedYear(year);
  }

  // apply loop on chart yearly
  let monthlyData = Array(12).fill(0);
  // let monthlyData = [];
   expenses.forEach((val) => { 
 
    const monthstrs = new Date(val.date).getMonth().toString();
    const year = new Date(val.date).getFullYear().toString();
     
    if(year == chartSelectedYear){
        const amounts = parseFloat(val.price) || 0;
        const monthIndexs = parseInt(monthstrs, 10) ;
        return monthlyData[monthIndexs] += amounts;
      }
  });
  
console.log(monthlyData);

 
const xAxisBar = (chartSelectedYear == 'All') ? sortedYears : MONTHS;
const xValues = (chartSelectedYear == 'All') ? yearlyPrices : monthlyData;
const hasDataToShow = xValues.some(amount => amount > 0);



  return (
    <Box className="charts-flex-container">
      {/* Monthly Expense Chart */}
      <Paper
        elevation={0}
        className="chart-paper-panel"
        sx={{
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.07)",
          border: "2px solid #E5E7EB",
        }}
      >
        <Typography variant="h6" className="chart-panel-title">
          <div className="MonthlyChartHeading">
            <p>Overall Monthly Expenses </p>
          </div>
        </Typography>
        {expenses.length > 0 ? (
          <LineChart
            xAxis={[{ scaleType: "band", data: MONTHS }]}
            series={[
              {
                data: monthlyMap,
                label: "Total Spent ($)",
                color: "#374151",
                area: true,
              },
            ]}
            height={280}
          />
        ) : (
          <Box className="chart-empty-placeholder">
            <Typography className="chart-empty-text">
              No monthly activity found to trace
            </Typography>
          </Box>
        )}
      </Paper>

      {/* Yearly Expense Chart */}
      <Paper
        elevation={0}
        className="chart-paper-panel"
        sx={{
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.07)",
          border: "2px solid #E5E7EB",
        }}
      >
        <Typography variant="h6" className="chart-panel-title">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="chart-heading"> {chartSelectedYear === 'All' ? 'Yearly Expenses' : `Monthly Expenses (${chartSelectedYear})`} </p>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <ChartFilterYearly onChartYearSelected={handleChartFilter} />
              {/* <ChartFilterMonthly/> */}
            </Box>
          </Box>
        </Typography>

        {hasDataToShow ? (
          <BarChart
            xAxis={[{ scaleType: "band", data: xAxisBar }]}
            series={[
              {
                data: xValues,
                label: "Total Spent ($)",
                color: "#374151",
              },
            ]}
            height={280}
          />
        ) : (
          <Box className="chart-empty-placeholder">
            <Typography className="chart-empty-text">
              No yearly records found to map
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

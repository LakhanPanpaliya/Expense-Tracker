import React from "react";

function ChartFilterYearly({onChartYearSelected}) {
  function handleClick(e) {
    onChartYearSelected(e.target.value);
  }
  return (
    <div className="filterByYears ">
      <select
        id="filter-years"
        onChange={handleClick}
        className="filter"
        defaultValue="All"
      >
        <option value="All">All</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>
    </div>
  );
}

export default ChartFilterYearly;

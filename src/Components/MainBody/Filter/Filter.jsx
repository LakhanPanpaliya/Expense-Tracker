import DownloadButton from "../Charts/DownloadButton";
import "./Filter.css";
export default function Filter({filterByYear, onYearSelect }) {
  function handleClick(e) {
    onYearSelect(e.target.value);
  }
  return (
    <div className="filterByYear ">
      <select
        id="filter-year"
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
      <p className="filterHeading">Filter : </p>
      <DownloadButton filterByYear={filterByYear}/>
    </div>
  );
}

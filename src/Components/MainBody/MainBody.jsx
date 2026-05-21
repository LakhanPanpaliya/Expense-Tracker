import { useState } from 'react';
import React from 'react';
import SeacrhMenuBar from './SearchMenuBar/SearchMenuBar'
import HeadingSection from './Heading/HeadingSection';
import Card from './Cards/Card';
import TableData from './Table/TableData'
import Form from './Forms/Form';  
import './MainBody.css';
import ExpenseCharts from './Charts/ExpenseCharts'; 
function MainBody() {

const data = [
     
  // ================= 2026 DATA =================
  { title: "Tech Accessories", description: "USB-C adapter hub and charging cables pack.", price: 45.50, date: "2026-12-02" },
  { title: "Electricity Bill", description: "Monthly home utility power grid charge.", price: 98.10, date: "2026-11-15" },
  { title: "Pet Food & Toys", description: "Bulk premium dog kibble supply and chew toys.", price: 54.90, date: "2026-10-25" },
  { title: "Groceries & Stock", description: "Major pantry restocking run at wholesale store.", price: 167.80, date: "2026-09-11" },
  { title: "Flight Ticket", description: "Downpayment for domestic vacation flights.", price: 245.00, date: "2026-08-03" },
  { title: "Museum Passes", description: "Two entry passes for special art exhibition.", price: 30.00, date: "2026-07-20" },
  { title: "Weekend Brunch", description: "Sunday morning pancakes and coffee with friends.", price: 41.20, date: "2026-06-14" },
  { title: "Gas Station", description: "Full tank for the weekend road trip.", price: 62.25, date: "2026-05-12" },
  { title: "Home Repair Tools", description: "Hardware tools, drywall anchors, and screws.", price: 56.50, date: "2026-04-07" },
  { title: "Coffee Beans", description: "Two bags of specialty roasted organic coffee beans.", price: 34.00, date: "2026-03-19" },
  { title: "Pharmacy Items", description: "Prescription medication items and first aid refills.", price: 22.40, date: "2026-02-12" },
  { title: "Streaming Bundle", description: "Monthly premium entertainment access fee.", price: 25.99, date: "2026-01-04" },

  // ================= 2025 DATA =================
  { title: "Charity Donation", description: "End of year contribution to regional food bank.", price: 100.00, date: "2025-12-30" },
  { title: "Thermostat Upgrade", description: "Smart home heating control module system.", price: 129.99, date: "2025-11-09" },
  { title: "Doctor Copay", description: "Annual health checkup clinic visit fee.", price: 30.00, date: "2025-10-22" },
  { title: "Car Battery", description: "Replacement battery kit and installation fee.", price: 145.00, date: "2025-09-18" },
  { title: "Gas Station", description: "Full fuel tank refill for highway road trip.", price: 61.40, date: "2025-08-05" },
  { title: "Beach Gear", description: "Sunscreen, beach towel, and umbrella purchase.", price: 49.90, date: "2025-07-11" },
  { title: "Train Ticket", description: "Round-trip transit pass for weekend city visit.", price: 36.00, date: "2025-06-25" },
  { title: "Gym Membership", description: "Monthly fee for the local fitness center and pool.", price: 45.00, date: "2025-05-10" },
  { title: "Home Office Chair", description: "Ergonomic desk chair upgrade for workspace.", price: 189.00, date: "2025-04-02" },
  { title: "Restaurant Dinner", description: "Weekend date night Italian food and wine.", price: 88.60, date: "2025-03-14" },
  { title: "Laundry Detergent", description: "Bulk cleaning supplies and household items.", price: 28.50, date: "2025-02-20" },
  { title: "Software License", description: "Annual cloud backup server subscription.", price: 59.99, date: "2025-01-08" },

  // ================= 2024 DATA =================
  { title: "Gifts & Wrapping", description: "Holiday season present purchases for friends.", price: 215.50, date: "2024-12-15" },
  { title: "Streaming Music", description: "Premium ad-free audio family subscription plan.", price: 16.99, date: "2024-11-28" },
  { title: "Electricity Bill", description: "Monthly home utility power grid charge.", price: 104.20, date: "2024-10-16" },
  { title: "Gym Shoes", description: "New pair of running shoes for training.", price: 130.00, date: "2024-09-02" },
  { title: "Book Store Run", description: "Purchased three new novels for vacation reading.", price: 42.15, date: "2024-08-19" },
  { title: "Summer BBQ Food", description: "Burgers, steaks, and drinks for backyard party.", price: 112.40, date: "2024-07-04" },
  { title: "Concert Ticket", description: "Live music festival general admission pass.", price: 95.00, date: "2024-06-22" },
  { title: "Netflix Subscription", description: "Monthly premium plan for 4K streaming.", price: 19.99, date: "2024-05-09" },
  { title: "Car Maintenance", description: "Routine oil change and tire rotation service.", price: 75.00, date: "2024-04-12" },
  { title: "Movie Night", description: "Cinema tickets, popcorn, and drinks for two.", price: 34.50, date: "2024-03-05" },
  { title: "Winter Coat", description: "Warm insulated jacket for the cold season.", price: 89.99, date: "2024-02-18" },
  { title: "Dentist Checkup", description: "Routine dental cleaning and examination.", price: 120.00, date: "2024-01-10" },

  // ================= 2023 DATA =================
  { title: "Holiday Dinner", description: "Family holiday restaurant group gathering.", price: 142.60, date: "2023-12-24" },
  { title: "Coffee Shop Run", description: "Team meeting morning coffees and pastries.", price: 18.35, date: "2023-11-04" },
  { title: "Mobile Phone Bill", description: "Unlimited monthly cellular voice calls and data plan.", price: 55.00, date: "2023-10-12" },
  { title: "Haircut & Grooming", description: "Regular salon appointment haircut trim.", price: 40.00, date: "2023-09-27" },
  { title: "Internet Service", description: "High-speed fiber home internet subscription.", price: 69.99, date: "2023-08-14" },
  { title: "Streaming Bundle", description: "Monthly video and music streaming service plans.", price: 24.99, date: "2023-07-09" },
  { title: "Gas Station", description: "Full fuel tank fill-up for highway driving.", price: 58.75, date: "2023-06-18" },
  { title: "Grocery Shopping", description: "Weekly essentials including milk, bread, and veggies.", price: 85.50, date: "2023-05-11" },
  { title: "Car Insurance", description: "Monthly vehicle insurance premium installment.", price: 110.00, date: "2023-04-05" },
  { title: "Water Utility", description: "Quarterly water meter consumption charge.", price: 32.20, date: "2023-03-22" },
  { title: "Gym Membership", description: "Monthly fitness center recurring access fee.", price: 45.00, date: "2023-02-01" },
  { title: "Electricity Bill", description: "Monthly home utility power grid charge.", price: 95.40, date: "2023-01-15" } 
  ];
  const [expenses, setExpenses] = useState(data);
  const [searchData,setSearchData] = useState(null);

  // add new expense   
   function addExpenseHandler(formData) {  
    setExpenses((prev) => [ formData,...prev]);
    // console.log(expenses);
  }

//   total expenses 
  const totalExpenses = expenses.reduce((prev , curr) =>{
     const itemPrice = Number(curr.price) || 0;
        return prev + itemPrice;
  },0).toFixed(2); 
// console.log(totalExpenses);


// total transactions 
const entries = expenses.length;
// console.log(entries);


// set search data 
function handleSearchData(searchdata){
  setSearchData(searchdata);
  // console.log(searchdata);
}

// now after apply search given data sent to tableData 
 
const afterSearchApply = expenses.filter((item) =>
  item.title.toLowerCase().includes(searchData?.toLowerCase() || "")
);

    return (
        <div className='mainbody'>
            <SeacrhMenuBar onAddExpense={addExpenseHandler} onSearch = {handleSearchData}/>
            <HeadingSection/>
            <Card totalExpenses = {totalExpenses} entries={entries}/>
            <TableData expenses={afterSearchApply} /> 
            <ExpenseCharts expenses={expenses}/>
        </div>
    );
}

export default MainBody;

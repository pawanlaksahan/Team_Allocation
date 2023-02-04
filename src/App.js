 
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';
import { useState } from "react";

function App() {

  const [selectedTeam,setTeam]=useState("TeamA");

  const [employees,setEmployee]= useState([
  {
      id:1,
      fullName:"Pawan Laksahan",
      designation:"Web Developer",
      gender:"male",
      teamName:"TeamA"
  },
  {
      id:2,
      fullName:"Tehan Perera",
      designation:"Backend developer",
      gender:"male",
      teamName:"TeamB"
  },
  {
      id:3,
      fullName:"Ruwani Kalpage",
      designation:"Content Writer",
      gender:"female",
      teamName:"TeamA"
  },
  {
      id:4,
      fullName:"Rahal Perera",
      designation:"UX Developer",
      gender:"male",
      teamName:"TeamB"
  },
  {
      id:5,
      fullName:"Tanasha Perera",
      designation:"Frontend developer",
      gender:"female",
      teamName:"TeamC"
  },
  {
      id:6,
      fullName:"Tanash Perera",
      designation:"Frontend developer",
      gender:"male",
      teamName:"TeamA"
  },
  {
      id:7,
      fullName:"nasha Perera",
      designation:"Frontend developer",
      gender:"female",
      teamName:"TeamB"
  },
  {
      id:8,
      fullName:"Tanasha Perera",
      designation:"Frontend developer",
      gender:"female",
      teamName:"TeamA"
  },
  {
      id:9,
      fullName:"Tanasha Perera",
      designation:"Frontend developer",
      gender:"female",
      teamName:"TeamD"
  },
  {
      id:10,
      fullName:"Tanasha Perera",
      designation:"Frontend developer",
      gender:"female",
      teamName:"TeamC"
  },
  {
      id:11,
      fullName:"Tanasha Perera",
      designation:"Frontend developer",
      gender:"female",
      teamName:"TeamD"
  },
  {
      id:12,
      fullName:"Tanasha Perera",
      designation:"Frontend developer",
      gender:"female",
      teamName:"TeamA"
  },

  ]);
function handleTeamSelectionChange (event){
  
  setTeam(event.target.value)

};
function handleEmployeeCardClick(event){
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                              ?(employee.teamName === selectedTeam)?{...employee, teamName:''}:{...employee,teamName: selectedTeam}
                              :employee);
       setEmployee(transformedEmployees);                       
};

  return (
     <div>
      <Header selectedTeam={selectedTeam}
               employeeCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}
               />
      <Employees employees={employees}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
                selectedTeam={selectedTeam}
                />
      <Footer/>
     </div>
  );
}

export default App;

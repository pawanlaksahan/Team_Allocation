 
import './App.css';
import Header from './Header';
import Error from './Error';
import Footer from './Footer';
import Employees from './Employees';
import { useState,useEffect } from "react";
import {  BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import GroupTeamMembers from './GroupTeamMembers';
import Nav from './Nav';

function App() {

  const [selectedTeam,setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeam')) ||"TeamA");

  const [employees,setEmployee]= useState(JSON.parse(localStorage.getItem('employeeList')) ||[
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
       useEffect(()=>{
          localStorage.setItem('employeeList', JSON.stringify(employees));
       },[employees])

       useEffect(()=>{
          localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
       },[selectedTeam])



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
    <Router>
         <Nav/>
      <Header selectedTeam={selectedTeam}
               employeeCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}
               />
            <Routes>
                <Route path="/" 
                element= {<Employees employees={employees}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
                selectedTeam={selectedTeam}
                />}
                >
                </Route>

                <Route path="/GroupTeamMembers" 
                       element={<><GroupTeamMembers employees={employees} selectedTeam={selectedTeam}
                                                     setTeam={setTeam} />  </>}
                        >
                </Route>

                <Route path="*" 
                       element= {<Error/>}
                        >
                </Route>
            
            </Routes>
    
            <Footer/>
      
    </Router>
    
  );
}

export default App;

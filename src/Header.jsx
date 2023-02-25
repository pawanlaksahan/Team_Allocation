
import "./App.css";

 const Header = ({selectedTeam,employeeCount})=>{

  return(

  <header className="container">
    <div class="row justify-content-center mt-3 mb-3">
      <div className="col-8">
     <h1>Team Member Allocation</h1>    
     <h2 > {selectedTeam} has {employeeCount} {employeeCount===1?"member":"members"}</h2>
     </div>
    </div>
  </header>
  
  );
 };
 export default Header;

 


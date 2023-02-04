
import femaleProfile from "./Images/femaleProfile.jpg";
import maleProfile from "./Images/maleProfile.jpg";
import "./App.css";

const Employees = ({employees,selectedTeam,handleTeamSelectionChange,handleEmployeeCardClick})=>{

  
    return(
        <main className="container">

           <div class="row justify-content-center mt-3 mb-3">
                <div class="col-6">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                    
                </div>
            </div>

            <div class="row justify-content-center mt-3 mb-3">
            
                <div class="col-8">
                    <div class="card-collection">
            {employees.map((employee)=>(
          <div id={employee.id} className= {(employee.teamName===selectedTeam ? 'card m-2 standout':'card m-2')} style={{cursor:"pointer"}}  onClick={handleEmployeeCardClick}>
                {/*in normal html we dont use curly brackets for style 
                but in react one is for jsx and other for javascript object notation*/}

             {(employee.gender==="male")?<img src={maleProfile} className="card-img-top" alt="femaleImage"/>
                                        :<img src={femaleProfile} className="card-img-top" alt="femaleImage"/>}
                {/*in react inside curly brackets we can develop javascript logic and 
                return html markup related code*/ }

              <div className="card-body">
                 <h5 className="card-title" > Full Name : {employee.fullName}</h5>
                 <p className="card-text"> <b>Designation : </b> {employee.designation}</p>
                     
              </div>

          </div>

        ))}
        </div>
        </div>
          </div>
        </main>
    )
};
export default Employees;
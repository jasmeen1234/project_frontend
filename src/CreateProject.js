import React,{useState} from 'react'
import axios from 'axios'
import "./CreatProject.css";
import Sidebar from './sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
 let initialValue={
  name:"",
  reason: 'Business',
 category: 'Quality A',
start_date: '',
 type: 'Internal',
 priority: 'High',
 end_date: '',
 division: 'Filters',
 dept: 'Startegy',
 location: 'Pune'
}

function CreateProject() {
  const navigate = useNavigate();
  const[handle, setHandle]=useState(initialValue);
function projectHandler(){
console.log(handle);

 axios.post("https://project-backend-rdo9.onrender.com/createproject",handle)
.then((data)=>{
console.log(data);


 })
.catch(error=>{
console.log(error)
});

alert("your data successfully save");
navigate('/projectlist');
setHandle(
  initialValue
  );
}
const handleInputChange =(e)=>{
  const{name, value}=e.target;
  setHandle({
    ...handle, [name]:value,
  
  });
  
  
};
  return (
    <div className='app-container'>
        <Sidebar />
    <main className="CreatprojectMain-container">
     
      <div className="logo" ><img src="./Logo.svg" alt="logo"/></div>

      <div className="CreatprojectMain-cards">
        <div className="CreatprojectMain-card">
          <div className="textareaandbtn">
            <textarea
              className="Creatprojectmaintextarea"
              placeholder="Enter Project Theme" name="name" value={handle.name} onChange={handleInputChange}
            />
            <button className="btn btn-primary" onClick={projectHandler}>Save Project</button>
          </div>
          <form action="post" className="projectform">
            <div className="Creatprojectform">
              <label htmlFor="Reason">Reason</label>
              <select id="Reason" className="Creatprojectformfild" name="reason" value={handle.reason} onChange={handleInputChange}>
                <option value="Business">For Business</option>
                <option value="Dealership">For Dealership</option>
                <option value="Transport">For Transport</option>
              </select>
              <label htmlFor="Category">Category</label>
              <select id="Category" className="Creatprojectformfild" name="category" value={handle.category} onChange={handleInputChange}>
                <option value="Quality A">Quality A</option>
                <option value="Quality B">Quality B</option>
                <option value="Quality C">Quality C</option>
                <option value="Quality D">Quality D</option>
              </select>
              <label htmlFor="Start_Date">Start Date as per Project Plan</label>
              <input
                type="date"
                id="Start_Date"
                className="Creatprojectforminput"
              />
            </div>
            <div className="Creatprojectform"  >
              <label htmlFor="Type">Type</label>
              <select id="Type" className="Creatprojectformfild" name="type" value={handle.type} onChange={handleInputChange}>
                <option value="Internal">Internal</option>
                <option value="External">External</option>
                <option value="Vendor">Vendor</option>
              </select>
              <label htmlFor="Priority">Priority</label>
              <select id="Priority" className="Creatprojectformfild" name="priority" value={handle.priority} onChange={handleInputChange}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <label htmlFor="End_Date">End Date as per Project Plan</label>
              <input
                type="date"
                id="Reason"
                className="Creatprojectforminput"
              />
            </div>
            <div className="Creatprojectform">
              <label htmlFor="Division">Division</label>
              <select id="Division" className="Creatprojectformfild" name="division" value={handle.division} onChange={handleInputChange}>
                <option value="Filters">Filters</option>
                <option value="Compressor">Compressor</option>
                <option value="Pumps">Pumps</option>
                <option value="Glass">Glass</option>
                <option value="Water Heater">Water Heater</option>
              </select>
              <label htmlFor="Department">Department</label>
              <select id="Department" className="Creatprojectformfild" name="dept" value={handle.dept} onChange={handleInputChange}>
                <option value="Startegy">Startegy</option>
                <option value="Finance">Finance</option>
                <option value="Quality">Quality</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Stores">Stores</option>
              </select>
              <label htmlFor="Location">Location</label>
              <select id="Location" className="Creatprojectformfild" name="location" value={handle.location} onChange={handleInputChange}>
                <option value="Pune">Pune</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <div>
                <p>
                  Status:{" "}
                  <span className="CreatprojectformStatus">Registered</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
    </div>
  );
}

export default CreateProject;

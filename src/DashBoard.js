import React,{useState, useEffect} from 'react'
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './sidebar/Sidebar';
function DashBoard() {
  const navigate = useNavigate();
  // const[data, setData]=useState([]);
  const[responseData, setResponseData]= useState({});
  // eslint-disable-next-line
  // const[totalProject, setTotalProject]=useState(0);
  // const[totalClosed, setTotalClosed]=useState(0);
  // const[totalRunning, setTotalRunning]=useState(0);
  // const[totalCancel, setTotalCancel]=useState(0);
  // const[closerid, setTotalCloser]=useState(0);

  useEffect(()=>{
   axios.get("https://project-backend-rdo9.onrender.com/dashboard")
    .then((response)=>
    setResponseData(response.data))
    
    
    .catch((error)=>{
      console.error("Error to fetch Data", error);
    });
    
  } ,[]);
  
  return (
    <div className='app-container'>
      <Sidebar/>
      <div className='dashboard1'>
      <h2 className='dashboard'>Dashboard
      <img src="./Logo.svg" alt="logo"/></h2>
      <div className="status">
      <div className="sts-field">
          <h3 onClick={() => navigate('/creatproject')}>Total Project</h3>
          <h2>{responseData.total}</h2>
         </div>
         <div className="sts-field">
          <h3>Closed</h3>
          <h2>{responseData.close}</h2>
         </div>
         <div className="sts-field">
          <h3>Running</h3>
          <h2>{responseData.running}</h2>
         </div>

        
         <div className='sts-field'>
          <h3>Closure Delay</h3>
          <h2>4</h2>
         </div>

         <div className='sts-field'>
          <h3>Cancelled</h3>
          <h2>{responseData.canceled}</h2></div>
        
      </div>
      {/* chartgraph part */}
   </div>
      
    </div>
  )
}

export default DashBoard

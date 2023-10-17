import './App.css';
import CreateProject from './CreateProject';
// import Register from './Register';
import Login from './Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProjectList from './ProjectList';
import Sidebar from './sidebar/Sidebar';
import DashBoard from './DashBoard';
import Logout from './Logout';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
       <Routes>
       <Route path="/sidebar" element={<Sidebar/>} />
       <Route path="creatproject" element={<CreateProject/>} />
       {/* <Route path='/' element={<Register/>}/> */}
       <Route path='/' element={<Login/>}/>
       <Route path='/projectlist' element={<ProjectList/>}/>
       <Route path='/dashboard' element={<DashBoard/>}/>
       <Route path='/logout' element={<Logout/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
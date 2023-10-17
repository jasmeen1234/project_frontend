import {useState} from 'react';
import axios from 'axios';
import './login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [getData,setData] = useState({
         email:'',
         password:''
    })

    const [getError,setError] = useState('')

    const onChangeHandler=(event)=>{
        setData({...getData,[event.target.name]:event.target.value})
    }

    const onSubmitHandler=(event)=>{
         event.preventDefault();
         if(!getData.email || !getData.password){
             alert('please provide the details');
             return ;
         }
         axios.post('https://project-backend-rdo9.onrender.com/api/user/login',getData).then(()=>{
            alert("successful");
          navigate('/dashboard');
            setError('');
         }).catch((error)=>{
            if(error && error.response && error.response.data){
                setError(error.response.data.message)
            }
            
         })
    }

    return (
    <div className="container">
        <div className="logo"><img src="./Logo.svg" alt="logo"/></div>
        <p className='para'>online project management</p> 
       
        <div >
           {getError && <h1 style={{color:'red'}}>{getError}</h1>} 
            <form className="main-user">
                <div >
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" onChange={onChangeHandler} name="email" />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" onChange={onChangeHandler} name="password" />
                </div>

                <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Submit</button>
            </form>
        </div>
     

    </div>)
}

export default Login;
import {useState} from 'react';
import axios from 'axios';
// import './login.css'
const Register = () => {

    const [getData,setData] = useState({
         userName:'',
         email:'',
         password:''
    })

    const onChangeHandler=(event)=>{
        setData({...getData,[event.target.name]:event.target.value})
    }

    const onSubmitHandler=(event)=>{
         event.preventDefault();
         if(!getData.userName || !getData.email || !getData.password){
             alert('please provide the details');
             return ;
         }
         axios.post('https://project-backend-rdo9.onrender.com/api/user/register',getData).then(()=>{
            alert("successful");
         }).catch(()=>{
            alert("internal server error");
         })
    }

    return (<div className="container">
        
        <div className='logo'>logo</div>
            <form className="main-user">
              <div className="form">
                <div  >
                    <label htmlFor="userName">User Name</label>
                    <input type="text" className="form" onChange={onChangeHandler} name="userName" />
                </div>
                <div >
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form" onChange={onChangeHandler} name="email" />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form" onChange={onChangeHandler} name="password" />
                </div>

                <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Submit</button>
                </div>
            </form>
            
    
          

    </div>)
}

export default Register;
  import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
const Login = () => {
  let navigate= useNavigate();
  const [email,setemail] =useState("");
  const [password,setpassword]=useState("");
  const SubmitHandler = async(e)=>{
    e.preventDefault();
    localStorage.setItem('email',email);
    const response = await fetch('http://localhost:3000/api/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
          email:email,
          password:password,
      })
    })
    const json = await response.json();
    if(json.success){
     //alert('You are Logged in ');
       navigate('/')
       
       localStorage.setItem('authtoken',json.token);
       console.log(localStorage.getItem('authtoken'))
    }
    else{
      alert("you are logged out");
    }
  }
  const onchangeHandler = (e)=>{
      setemail(e.target.value);
  }
  const onchangepassowrd = (e)=>{
    setpassword(e.target.value);
  }
  return (
    <div>

<form onSubmit={SubmitHandler}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={email} onChange={onchangeHandler}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='passowrd' value={password} onChange={onchangepassowrd}/>
  </div>
  <button type="submit" className=" m-3 btn btn-primary">Submit</button>
  <Link to="/createuser" className="m=3 btn btn-danger"> Create User</Link>
</form>
    </div>
  )
}

export default Login
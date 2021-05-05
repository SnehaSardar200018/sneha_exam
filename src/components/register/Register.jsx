import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {Name,Email,Pass,role} from "./Redux";

const Register = () => {
   
   const state=useSelector((state)=>state)
   const dispatch=useDispatch();
    const{Reg}=state;
  
   const submit=()=>{
      console.log(state)
      axios.post('http://localhost:4000/register',{
          name:Reg.name,
          email:Reg.email,
          password:Reg.password,
          role: Reg.role,
      })
       
   }
    
  

    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" >Name</label>
                <input type="text" className="form-control" name="name"  value={Reg.name} onChange={(e)=>dispatch(Name(e.target.value))} required  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" >Email address</label>
                <input type="text" className="form-control" name="email"  value={Reg.email} onChange={(e)=>dispatch(Email(e.target.value))} required  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password"  value={Reg.password} onChange={(e)=>dispatch(Pass(e.target.value))} required  />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Role</label>
                <input type="text" className="form-control" name="role"  value={Reg.role} onChange={(e)=>dispatch(Role(e.target.value))} required  />
            </div>
            <Link to="/login"><button onClick={submit}>Submit</button></Link>

        </>
    )
   
}
export default  Register;





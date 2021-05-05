import axios from 'axios';
import React, { useState } from 'react';
import {email,passwor,role,getFetch} from "./Redux";
import { useSelector,useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setIsLoggedin } from '../../redux/Data/Actions';

const LoginForm= () => 
{
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
	const dispatch = useDispatch()
	const history=useHistory()
	useEffect(()=>{
		dispatch(getFetch());
	 },[])
	function handleLogin(e)
	{
		e.preventDefault()
		let tryinguser={}
		tryinguser["email"]=email
		tryinguser["password"]=password
        tryinguser["role"]=role
		console.log(tryinguser)
		axios.post('http://localhost:4000/checklogin',tryinguser).then((resp)=>
		{
			if(resp.data==='OK')
			{
			console.log('OK')
			dispatch(setIsLoggedin(true))
			history.push('/faculty || /student')
			}
			else
			alert("Incorrect Details")
		})

	}
    return(
        <div className="wrapper-1">
			<div className="wrapper-box">
				<div className="left-1"></div>
				<div className="right-1">
				<form>
					<h2 className="first-heading">Log in to Your Account</h2>
					<input id="email"  type="text" className="input-1" placeholder="Type Email" required    
					onChange={(e)=>setEmail(e.target.value)} value={email}/>
					<input password="password" type="password" className="input-1" placeholder="Type Password" required   
					onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    <input type="text" className="input-1" placeholder="Type your Role" required 
                    onChange={(e)=>setRole(e.target.value)} value={role}  /> 
					<button type="submit" className="btn-1" onClick={(e)=>handleLogin(e)}>Log in</button>
				</form>
				</div>
			</div>
		</div>
    );
}
export default LoginForm;

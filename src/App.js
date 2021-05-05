import './App.css';
import {BrowserRouter as Router,Redirect,Route,Switch} from 'react-router-dom'
import Register from "./components/register/Register.jsx";
import Faculty from './components/faculty/Faculty';

import StudentForm from './components/student/StudentForm';
import LoginForm from './components/login/LoginForm';
import { useSelector } from 'react-redux';
import MailerComponent from './components/MailerComponent';
function App() {

  const LoggedIn = useSelector(state => state.LoggedIn)
  return (
    <>
    <Router>
      {LoggedIn?<Navbar/>:null}
      <Switch>
      <Route exact path="/" component={()=> <Register/>}/>
      <Route path="/login" component={()=><LoginForm/>}/>
      <Route path="/signup" component={()=><SignUp/>}/>
      <Route path="/home" component={()=>LoggedIn?<Home/>:<LoginForm/>}/>
      <Route path="/faculty" component={()=>LoggedIn?<Faculty/>:<LoginForm/>}/>
      <Route path="/edit" component={()=>LoggedIn?<EditStudents/>:<LoginForm/>}/>
      <Route path="/delete" component={()=>LoggedIn?<DeleteStudents/>:<LoginForm/>}/>
      <Route path="/mark" component={()=><MarkStudents/>}/>
      {/* <Route path="/view" component={()=><ViewDetail/>}/> */}
      <Route path="/studentform/:selectedId" component={(props)=>LoggedIn?<StudentForm selectedId={props.match.params.selectedId}/>:<LoginForm/>}/>
      <Route path="/studentform/" component={()=>LoggedIn?<StudentForm/>:<LoginForm/>}/>
      <Route path="/viewDetail/:type/:id" component={(props)=>LoggedIn?<ViewDetail type={props.match.params.type} selectedId={props.match.params.id}/>:<LoginForm/>}/>
      <Route path="/aboutus" component={()=>LoggedIn?<AboutUs/>:<LoginForm/>}/>
      <Route path="/mailer" component={()=><MailerComponent/>}/>
      </Switch>
    </Router>
      </>
  );
}

export default App;


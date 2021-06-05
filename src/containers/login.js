import React,{useState}from "react"
import { connect } from 'react-redux';
import {loginAsync} from '../actions/auth';
import {useHistory} from 'react-router-dom';
//tanushsoftware87@gmail.com
//shopadmin
const Login = (props) => {
   const history = useHistory();
   console.log('login his',history);
   const onSubmit = e => {
      e.preventDefault();
      console.log('inside on submit')
      console.log('email',email)
      console.log('password',password)
      props.loginAsync({ email, password,history});
   }
   const [email,setEmail] = useState(null);
   const [password,setPassword] = useState(undefined)
   return (
      <div className="container">
         <form onSubmit={e => onSubmit(e)}>
         <div class="form-group">
         <label for="exampleInputEmail1">Email</label>
         <input
             id="exampleInputEmail1"
             type="email"
             className="form-control" 
             placeholder="Enter Email"
             value={email}
             name="email"
             onChange={e => setEmail(e.target.value)}
          />
       </div>
       <div class="form-group">
         <label for="exampleInputPassword">Password</label>
         <input
             id="exampleInputPassword"
             type="password"
             className="form-control" 
             placeholder="Enter Name"
             value={password}
             name="password"
             onChange={e => setPassword(e.target.value)}
          />
       </div>
       <button type="submit">Sign in</button>
         </form>
      </div>
   )
}

const mapStateToProps = state => {
   return {
     userAuth: state.auth.userAuth
   }
 };
 
 const mapDispatchToProps = dispatch => {
   return {
     loginAsync: ({ email, password,history }) => dispatch(loginAsync({ email, password,history})),
   }
 }
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);

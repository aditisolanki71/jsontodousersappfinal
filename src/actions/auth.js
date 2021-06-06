import React from "react"
import axios from "axios";

export const login = (auth) => ({
   type: "LOGIN",
   auth
 });

export const loginAsync = ({email,password,history}) => {
   return async (dispatch) => {
      try {
      //const response = await axios.post('/auth/signin', { username: email, password });
      //console.log('res is',response)
      // let response;
      // setTimeout({response : {Success: 'successfully signed in'}},2000)
      // console.log('response',response)
      const response = await axios.post('https://cloud-project-backend.herokuapp.com/api/auth/signin',{username: email,password});
      console.log('res',response)
      console.log('history',history)
      const { data } = response;
      localStorage.setItem('auth', JSON.stringify(data));
      console.log('data',JSON.stringify(data))
      console.log('accesstoken',JSON.stringify(data.accessToken))
      localStorage.setItem('accesstoken', JSON.stringify(data.accessToken));
      //here we set our code into localstorage
      //get data from localstorage in edit-user.js file
      //localStorage.setItem('auth', JSON.stringify({ accessToken:response.accessToken }));
      history.push('/home')
      }
      catch (err) {
         console.log(err);
        console.log('Invalid username or password');
       }
   }
}

export const logout = () => ({
   type: "LOGOUT"
 });
 
 export const logoutAsync = (history) => {
    console.log('inside logout')
   return (dispatch) => {
     localStorage.removeItem('accesstoken');
     dispatch(logout());
     history.push("/login")
   };
 };
 
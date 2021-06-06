const authReducer = (state = {}, action) => {
  console.log('action is',action)
   switch (action.type) {
     case "LOGIN":
       return {
         userAuth: action.auth
      };
     case "LOGOUT":
       return {};
     default:
       return state;
   }
 };
 
 export default authReducer;
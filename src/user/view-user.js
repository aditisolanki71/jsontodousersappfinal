import React, {useEffect,useState} from "react"
import axios from "axios"
import {useParams,Link} from "react-router-dom"
const ViewUser = () => {

   const {id} = useParams()
   
   const [user,setUser] = useState({})

   useEffect(() => {
      loadUser();
   },[])
   const loadUser = async e => {
      const res = await axios.get(`http://localhost:3001/users/${id}`)
      setUser(res.data)
    }
   return (
      <div className="container">
         <div class="card text-center">
            <div class="card-header">
               User Detail
            </div>
            <div class="card-body">
               <h5 class="card-title">{user.name}</h5>
               <p class="card-text">{user.email}</p>
               <p class="card-text">{user.phone}</p>
               <Link to="/home" class="btn btn-primary">Home</Link>
            </div>
            {/* <div class="card-footer text-muted">
               2 days ago
            </div> */}
         </div>
      </div>
   )
}
export default ViewUser;
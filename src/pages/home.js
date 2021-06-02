import React ,{useEffect,useState}from 'react'
import axios from "axios"
import {Link,useHistory} from "react-router-dom"

const Home = () => {
   const [users,setUsers]=useState([])
   const history = useHistory();
   useEffect (() => {
      loaduser()
   },[])
   
   const loaduser = async() => {
      const res = await axios.get('http://localhost:3001/users')
      console.log('res',res)
      setUsers(res.data)
   }
   const handleDelete = async id => {
      console.log('inside handle dlt',id)
      await axios.delete(`http://localhost:3001/users/${id}`)
      history.push('/')
      loaduser()
   }
   return (
      <div style={{'padding': '2px','display': 'flex'}}>
         <table class="table">
         <thead>
            <tr>
            <th scope="col">No.</th>
               <th scope="col">Name</th>
               <th scope="col">Email</th>
               <th scope="col">Action</th>
            </tr>
         </thead>
         <tbody>
         {users && users.map((user,index) => (
               <tr>
               <th scope="row">{index+1}</th>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>
                  <Link to={`/user/view/${user.id}`} class="btn btn-info mr-2" style={{'marginRight': '2px'}}>View</Link>
                  <Link to={`/user/edit/${user.id}`} class="btn btn-success mr-2" style={{'marginRight': '2px'}}>Edit</Link>
                  <Link class="btn btn-danger mr-2" onClick={() => handleDelete(user.id)} style={{'marginRight': '2px'}}>Delete</Link>
               </td>
            </tr>
         ))}
         </tbody>
         </table>
      </div>
   )
}
export default Home;
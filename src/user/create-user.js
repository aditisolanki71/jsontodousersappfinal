import React,{useState} from "react"
import {useHistory} from 'react-router-dom'
import axios from "axios"

const AddUser = () => { 

   const history = useHistory();
   const [user,setUser] = useState({
      name: '',
      email: '',
      phone: '',
   })

   const handleChange = (e) => {
      setUser({...user,[e.target.name] : e.target.value})
   }

   const onSubmit = async e => {
      e.preventDefault()
      await axios.post('http://localhost:3001/users',user)
      history.push('/home')
   }
   const {email,name,phone} = user
   return (
   <div className="container">
     <div className="w-75 mx-auto shadow p-5">
       <h2>Add User</h2>
      <form onSubmit={e => onSubmit(e)}>
      <div class="form-group">
        <label for="exampleInputName">Name</label>
        <input
            id="exampleInputName"
            type="text"
            className="form-control" 
            placeholder="Enter Name"
            value={name}
            name="name"
            onChange={e => handleChange(e)}
         />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
            id="exampleInputEmail1"
            type="text"
            className="form-control" 
            placeholder="Enter Name"
            value={email}
            name="email"
            onChange={e => handleChange(e)}
         />
      </div>
      <div class="form-group">
        <label for="exampleInputContact">Contact</label>
        <input
            id="exampleInputContact"
            type="text"
            className="form-control" 
            placeholder="Enter Name"
            value={phone}
            name="phone"
            onChange={e => handleChange(e)}
         />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
   )
}
export default AddUser;
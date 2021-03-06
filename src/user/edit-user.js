import React ,{useState,useEffect}from "react"
import {useParams,useHistory} from "react-router-dom"
import axios from "axios"
const EditUser = () => {
   const {id} = useParams()
   
   const history = useHistory()
   const [user,setUser] = useState({})
   useEffect(() => {
      let auth = localStorage.getItem('auth');
      console.log('auth',auth)
      let accessToken = localStorage.getItem('accesstoken')
      console.log('accesstoken',accessToken)
      //temporary code for login file
      //if user not login than token doesn't set so it will redirect to login using belove code
      // if(!auth) {
      //    history.push('/login')
      // }
   },[])
   useEffect(() => {
      loadUser()
    },[])

    const loadUser = async e => {
      const res = await axios.get(`http://localhost:3001/users/${id}`)
      setUser(res.data)
    }
    const handleChange = e => {
       setUser({...user,[e.target.name]: e.target.value})
    }
    const onSubmit = async e=> {
       e.preventDefault()
        await axios.put(`http://localhost:3001/users/${id}`,user)
      history.push('/home')
    }
    const handleCancel = () => {
       history.push('/home')
    }
    const {email,name,phone} = user
   return (
      <div>
          <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2>Edit User</h2>
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
       <button type="submit" class="btn btn-primary" style={{'marginRight': '2px'}}>Submit</button>
       <button type="button" onClick={e => handleCancel()} class="btn btn-warning">cancel</button>
   </form>
     </div>
     </div>
      </div>
   )
}
export default EditUser
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './layout/navbar'
import Home from './pages/home'
import Contactus from './pages/contactus'
import Aboutus from './pages/aboutus'
import AddUser from './user/create-user'
import EditUser from './user/edit-user'
import ViewUser from './user/view-user'
import Login from './containers/login'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/contact" exact component={Contactus}/>
        <Route path="/about" exact component={Aboutus}/>
        <Route path="/user/add" exact component={AddUser}/>
        <Route path="/user/edit/:id" exact component={EditUser}/>
        <Route path="/user/view/:id" exact component={ViewUser}/>
        {/* <Route path="" component={}> */}
      </Switch>
      </div>
      </Router>
    );
}

export default App;

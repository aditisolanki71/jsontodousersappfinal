import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import './App.css';
import Navbar from './layout/navbar'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import Contactus from './pages/contactus'
import Aboutus from './pages/aboutus'
import AddUser from './user/create-user'
import EditUser from './user/edit-user'
import ViewUser from './user/view-user'
import Login from './containers/login'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export const history = createBrowserHistory();
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/contact" exact component={Contactus}/>
        <Route path="/about" exact component={Aboutus}/>
        <Route path="/user/add" exact component={AddUser}/>
        <Route path="/user/edit/:id" exact component={EditUser}/>
        <Route path="/user/view/:id" exact component={ViewUser}/>
        <Route component={NotFound} />
        {/* <Route path="" component={}> */}
      </Switch>
      </div>
      </Router>
    );
}

export default App;

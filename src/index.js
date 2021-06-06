import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./store/configureStore";
import { login } from "./actions/auth";
import { history } from "./App";
const store = configureStore();
// ReactDOM.render(
//   <React.StrictMode>
//      <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const rootElement = document.getElementById("root");

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, rootElement);
    hasRendered = true;
  }
};
ReactDOM.render(<div>Loading...</div>, rootElement);
let auth = localStorage.getItem('auth');
console.log('auth is',auth)
if (auth) {
  console.log('inside if',auth)
  auth = JSON.parse(auth);
  store.dispatch(login(auth));
  renderApp();
}
else {
  console.log('inside else')
  const path = history.location.pathname; 
  console.log('path is',path)
  if (path === '/') {
    history.push('/');
  }
  renderApp();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

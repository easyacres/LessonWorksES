import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Home from './components/Home';

// export default class App extends Component {
//     render() {
//         // JSX
//         return {
//             <div>
//                 <h1> I am the App component</h1>
//             </div>
            
//         };
//     }
// }


function App(){
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route path ="/profile" component={Profile}/>
        <Route path ="/dashboard" component={Dashboard}/>
        <Route path ="/signup" component={Signup}/>
        <Route path ="/login" component= {Login}/>
        <Route path ="*" component= {NotFound}/>
      </Switch>

    {/* <div>
      <h1>I am the App component</h1>
    </div> */}

    </Router>
  )
}
export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

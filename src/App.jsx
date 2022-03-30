import './App.css';
import React,{useContext} from 'react';
import Navbar from './components/Navbar'
import LogIn from './components/LogIn'
import SuccesfullLogin from './components/SuccesfullLogin';
import { AuthContext } from './contexts/AuthContext';


function App() {
  let {isAuth} = useContext(AuthContext);
  return (
    <div className="App">
        <Navbar/>
        {
          isAuth?<SuccesfullLogin/>:<LogIn/>
        }
        
        
    </div>
  );
}

export default App;

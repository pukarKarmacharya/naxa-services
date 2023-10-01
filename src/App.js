
import './App.css';
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {getServicesFetch} from './redux/actions/actions'
import {useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const objref = {};

  useEffect(() =>{
    dispatch(getServicesFetch());
  })

  const services = useSelector(state => state.myReducer.services);
 
  services.forEach((service , index) =>{
    objref[index] = React.createRef()
  })

  return (
    <div className="App">
      <Navbar objref={objref}/>
      <Home objref={objref}/>
    </div>
  );
}

export default App;


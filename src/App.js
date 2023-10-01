
import './App.css';
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import {useRef,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getServicesFetch} from './redux/actions/actions'

function App() {
  const dispatch = useDispatch();

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const section7 = useRef(null);
  
  const objref = {0:section1,1:section2,2:section3,3:section4,4:section5,5:section6,6:section7};

  useEffect(() =>{
    dispatch(getServicesFetch());
  },[])

  return (
    <div className="App">
      <Navbar objref={objref}/>
      <Home objref={objref}/>
    </div>
  );
}

export default App;


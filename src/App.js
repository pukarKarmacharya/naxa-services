
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {getServicesFetch} from './redux/actions/actions'


function App() {
  const dispatch = useDispatch();
  const services = useSelector(state => state.myReducer.services);
  return (
    <div className="App">
      <button onClick={() => dispatch(getServicesFetch())}>Get Services</button>
      <div>
        Services: {services.map((service => (
          <div>{service.title}</div>
        )))}
      </div>
    </div>
  );
}

export default App;

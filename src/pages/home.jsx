import Card from "../components/Card";
import {useRef, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getServicesFetch} from '../redux/actions/actions'

export const Home = ({objref}) => {
  const dispatch = useDispatch();
  const services = useSelector(state => state.myReducer.services);

/*   let ref = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]; */

  /* const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const section6 = useRef(null);
  const section7 = useRef(null);
  
  const objref = {0:section1,1:section2,2:section3,3:section4,4:section5,5:section6,6:section7}; */

  /* const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  } */

/*   const scrollToSection = (index) => {
    ref[index].current.scrollIntoView({behavior:'smooth'})
  } */

  /* useEffect(() =>{
    dispatch(getServicesFetch());
  },[]) */

  return (
    <div>
      {/* <button onClick={() => dispatch(getServicesFetch())}>Get Services</button> */}
      {/* <nav style={styles.navbarStyle}>
          <ul style={styles.navbarRightStyle}>
            {services.map((service, index) => (
              <li style={styles.navbarItemStyle} onClick={() => scrollToSection(objref[index])}>
                <div>
                  {service.title}
                </div>
                
              </li>
            ))}
          </ul>
        </nav> */}
      {services.map((card,index) => (
        <div>
          <Card
            key={card.id}
            image={card?.photo}
            icon={card?.icon}
            title={card.title}
            description1={card.description1}
            description2={card.description2}
            section={objref[index]}
            /* ref={ref[index]} */
          />
        </div>
      ))}
    </div>
  );
};



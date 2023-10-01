import React from "react";
import {useSelector} from 'react-redux';

export const Navbar = ({objref}) => {
  const services = useSelector(state => state.myReducer.services);
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
        <nav style={styles.navbarStyle}>
          <ul style={styles.navbarRightStyle}>
            {services.map((service,index) => (
              <li style={styles.navbarItemStyle} onClick={() => scrollToSection(objref[index])} key={index}>

                <div>

                  {service.title}
                </div>
              </li>
            ))}
          </ul>
        </nav>
    </div>
  );
};

const styles = {
  navbarStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    position: "fixed",
    top: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },

  navbarRightStyle: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },

  navbarItemStyle: {
    marginLeft: "40px",
  },
};

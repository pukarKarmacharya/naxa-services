import React from "react";

export const Card = ({ image,icon, title, description1, description2, section}) => {
  return (
    <div style={styles.row} ref={section}>
      <div style={styles.leftColumn}>
        <div style={styles.cardStyle}>
        <img
          src={image}
          alt={title}
          height={300}
         style={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
        />
        </div>
      </div>
      <div  style={styles.rightColumn}>
        <div style={styles.cardStyle}>
        <img
          src={icon}
          alt={title}
          height={50}
          style={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
        />
        <div style={styles.titleStyle}>{title}</div>
        <div style={styles.descriptionStyle}>{description1}</div>
        <div style={styles.descriptionStyle}>{description2}</div>
        </div>
        
      </div>
      
    </div>
  );
};

const styles = {
  row:{
    display: "flex",
    height:"100vh",
    justifyContent: "center",
    alignItems: "center"
  },

  cardStyle: {
    backgroundColor: "#fff",
    padding: "20px",
    marginTop: "20px",

  },

  leftColumn:{
    flex: "25%"
  },

  rightColumn:{
    flex: "75%",
    paddingLeft: "20px"
  },
  
  titleStyle: {
    color: "#6315eb",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  descriptionStyle: {
    color: "#333",
    fontSize: "16px",
    marginBottom: "5px",
  },
};

export default Card;

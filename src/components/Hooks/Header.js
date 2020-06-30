import React from "react";

const styles = {
  background: "linear-gradient(20deg, #6813cb, #2575fc)",
  textAlign: "center",
  borderRadius: "0.2em",
  color: "#FFF",
  padding: "0.3em",
  margin: "0.3em",
  fontSize: "14px",
};

const Header = (props) => {
  return (
    <div style={styles}>
      <h2>{props.title}</h2>
      <span role="img" aria-label="hook emoji">
        ⚓
      </span>
    </div>
  );
};

export default Header;

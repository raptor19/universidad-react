import React from "react";

const getRandomColor = () => "#" + Math.random().toString(16).slice(2, 8);

const Button = React.memo(({ callback, children }) => {
  const styles = {
    padding: "1em",
    fontSize: "20px",
    backgroun: getRandomColor(),
  };
  return (
    <button style={styles} onClick={callback}>
      {children}
    </button>
  );
});

export default Button;

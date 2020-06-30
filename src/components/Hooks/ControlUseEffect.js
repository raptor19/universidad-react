import React, { useState, useEffect } from "react";

const ControlUseEffect = () => {
  const [num, setNum] = useState(0);
  const [emoji, setEmoji] = useState("🦁");

  useEffect(() => {
    alert("useEffect 🎇");
  }, [emoji, num]);

  const addNum = () => {
    setNum(num + 1);
  };

  const toggleEmoji = () => {
    const nextEmoji = emoji === "🦁" ? "🙊" : "🦁";
    setEmoji(nextEmoji);
  };

  return (
    <div>
      <p>ControlUseEffect</p>
      <button onClick={addNum}>ADD ({num})</button>
      <button onClick={toggleEmoji}>Alternar Emoji</button>
      <h1>{emoji}</h1>
    </div>
  );
};

export default ControlUseEffect;

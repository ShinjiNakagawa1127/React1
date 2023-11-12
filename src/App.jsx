import React from "react";
import ColorfulMessage from "./conponents/colorful";
const contentStyle = {
  color: "blue",
  fontSize: "18px",
};
const contentLedyStyle = {
  color: "pink",
  fontSize: "18px",
};
const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="pink" >お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink"  >元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;

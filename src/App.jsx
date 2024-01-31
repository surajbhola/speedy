import React from "react";
import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
    <Header></Header>
      <Player />
      <div id="challenges">
        <TimeChallenge title="easy" targetTime={1} ></TimeChallenge>
        <TimeChallenge title="Not easy" targetTime={5} ></TimeChallenge>
        <TimeChallenge title="Getting tough" targetTime={10} ></TimeChallenge>
        <TimeChallenge title="Pros Only" targetTime={15} ></TimeChallenge>
      </div>
    </>
  );
}

export default App;

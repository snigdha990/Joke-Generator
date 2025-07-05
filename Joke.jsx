import React from "react"; 
export default function Joke({ setup, punchline }) {
  const [isShown,setIsShown]=React.useState(false);
  function toggleShown(){
    setIsShown(prevShown=>!prevShown);
  }
  return (
    <div className="joke">
      {setup && <p className="setup">🗣️ {setup}</p>}
      {isShown && <p className="punchline">😂 {punchline}</p>}
      <button onClick={toggleShown}>{isShown ? "Hide":"Show"} Punchline</button>
      <hr />
    </div>
  );
}

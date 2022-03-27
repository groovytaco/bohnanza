import "./Instructions.css";
import infoImage from "../Images/infoIcon.png";
import instructions from "../Images/instructionsImage.png";
import { useEffect, useState } from "react";
function Instructions() {
  const [hidden, setHidden] = useState(true);
  const [allowClicks, setAllowClicks] = useState("none");
  function toggleInstructions() {
    setHidden(!hidden);
    if(allowClicks==="none")
    {
        setAllowClicks("all");
    }else{
        setAllowClicks("none");
    }
  }
  return (
    <div>
      <div className="Container" style={{pointerEvents: allowClicks}}>
        <div id="Instructions" hidden={hidden}>
          <img id="image" src={instructions} alt=""></img>
        </div>
      </div>
      <button
        id="openInstructions"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "4vw",
          height: "4vw",
          backgroundImage: `url(${infoImage})`,
        }}
        onClick={toggleInstructions}
      ></button>
    </div>
  );
}

export default Instructions;

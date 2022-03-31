import { useState } from "react";
import infoImage from "../../images/infoIcon.png";
import instructions from "../../images/instructionsImage.png";
import "./instructions.css";

const Instructions = () => {
  const [hidden, setHidden] = useState(true);
  const [allowClicks, setAllowClicks] = useState("none");
  const toggleInstructions = () => {
    setHidden(!hidden);

    if (allowClicks === "none") setAllowClicks("all");
    else setAllowClicks("none");
  };

  return (
    <div>
      <div className="Container" style={{ pointerEvents: allowClicks }}>
        <div id="Instructions" hidden={hidden}>
          <img id="image" src={instructions} alt=""></img>
        </div>
      </div>
      <button
        id="openInstructions"
        onClick={toggleInstructions}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "4vw",
          height: "4vw",
          backgroundImage: `url(${infoImage})`,
        }}
      ></button>
    </div>
  );
}

export default Instructions;

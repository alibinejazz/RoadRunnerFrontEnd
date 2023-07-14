import React from "react";
import { useNavigate } from "react-router-dom";
import pngwing from "./pngwing.png";

const Thanks = () => {
  const nav = useNavigate();

  function backToMain() {
    nav("/");
  }
  return (
    <div data-testid="thankyoupage">
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <img data-testid="thankyou" src={pngwing} alt="222" width="70%" />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <button
          data-testid="start-over"
          onClick={backToMain}
          style={{
            borderRadius: "10px",
            backgroundColor: "black",
            color: "white",
            width: "200px",
            height: "50px",
          }}
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Thanks;

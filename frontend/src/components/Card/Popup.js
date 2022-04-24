import React from "react";
import "./Popup.scss";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="innerpop">
        {props.children}
        <button
          className="btnclose"
          onclick={() => props.setTrigger(false)}>
          close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

import React from "react";
import "./search.scss";
export default function Search(props) {
  return (
    <div className="row">
      {/* <div className="col-md-6">
                <h1 className="title">Weather</h1>
            </div> */}

      <div className="col-md-6">
        <form
          className="region"
          onSubmit={(e) => {
            props.changeLocation(e);
          }}
        >
          <input
            type="text"
            className="regioninput"
            placeholder="Search a place"
            onChange={(e) => {
              props.changeRegion(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

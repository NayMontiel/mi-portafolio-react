import React from "react";

export const ProgressBar = () => {
  return (
    <>
      <p className="label mb-2">HTML</p>
      <div className="progress mb-3">
        <div
          className="progress-bar text-start"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="95"
          style={{ width: "95%" }}
        >
          98%
        </div>
      </div>

      <p className="label mb-2">CSS</p>
      <div className="progress mb-3">
        <div
          className="progress-bar text-start"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="95"
          style={{ width: "95%" }}
        >
          98%
        </div>
      </div>

      <p className="label mb-2">JS</p>
      <div className="progress mb-3">
        <div
          className="progress-bar text-start"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="95"
          style={{ width: "95%" }}
        >
          98%
        </div>
      </div>
      <p className="label mb-2">REACT</p>
      <div className="progress mb-3">
        <div
          className="progress-bar text-start"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="95"
          style={{ width: "95%" }}
        >
          98%
        </div>
      </div>
    </>
  );
};

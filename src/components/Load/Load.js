import React from 'react';

import "./Load.css";

export default function Load({ hasError = false }) {
  let message = "";
  const okLoad = () => message = "Loading..."
  const errorLoad = () => message = "Error: try to refresh"
  
  hasError ? errorLoad() : okLoad()

  return (
    <div className="loading">
      <div className="preloader" >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <h3>&nbsp;{message}</h3>
    </div>
  )
}

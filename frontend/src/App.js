import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // TODO: Create a useEffect() that calls to the backend for the graphql object.
  // TODO: Start the bac end server.
  // TODO: Start the React front end server.
  // TODO: Load the page.

  return (
    <div className="App">
      <header className="App-header">
        <h1>I am amazing</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

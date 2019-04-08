import React from 'react';

export default function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header d-flex flex-row">
            <a
              className="navbar-brand"
                          href="#"
            >
              <img alt="Brand" className ="App-logo" src={props.logo} />
            </a>
            <h2>Current Score: {props.score}</h2>
            <h2>High Score: {props.highScore}</h2>
          </div>
        </div>
      </nav>
    </div>
  );
}

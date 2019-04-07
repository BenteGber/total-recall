import React from 'react';

export default function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a
              className="navbar-brand"
              href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1600px-MarvelLogo.svg.png"
            >
              <img alt="Brand" src={props.logo} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

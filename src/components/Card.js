import React, { PureComponent } from 'react';
// const log = console.log;

export default class Card extends PureComponent {
  render() {
    return (
      <div>
        <div className="col-xs-6 col-md-3 card-frame">
          {/* <a href="#" className="thumbnail"> */}
            <img 
              className="thumbnail"
                id={this.props.alt}
              src={this.props.src}
              alt={this.props.alt}
              onClick={this.props.onClick}
            />
          {/* </a> */}
        </div>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';

export default class Card extends PureComponent {
  render() {
    return (
      <div>
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img
              src={this.props.src}
              alt={this.props.alt}
            />
          </a>
        </div>
      </div>
    );
  }
}

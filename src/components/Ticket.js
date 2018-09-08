import React, { Component } from 'react';

class Ticket extends Component {
  constructor(props) {
    super(props);
    console.log('props', props.data.categories[0].additionals[0].left);

    this.state = {
      clicks: 0
    };
  }
  increaseAmount = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };
  decreaseAmount = () => {
    if (this.state.clicks > 0) {
      this.setState({
        clicks: this.state.clicks - 1
      });
    }
  };
  render() {
    return (
      <div className="flex ticket">
        <p>{this.props.category.name}</p>
        <div className="ticket--amount">
          <button
            className="ticket--amount--button"
            onClick={this.decreaseAmount}
          >
            -
          </button>
          <p className="ticket--amount--number">{this.state.clicks}</p>
          <button
            className="ticket--amount--button"
            onClick={this.increaseAmount}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Ticket;

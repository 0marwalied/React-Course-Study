import React, { Component } from "react";

interface IProps {
  counter?: number;
}

interface IState {
  counter: number;
}

class HomePage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div
        onClick={() => {
          this.setState({ counter: this.state.counter + 1 });
        }}
        className="cursor-pointer"
      >
        HomePage {this.state.counter}
      </div>
    );
  }
}
export default HomePage;

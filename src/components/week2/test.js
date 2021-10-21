import React, { Component } from "react";
import AlertBox from "./index";

class Week2 extends Component {
  state = {
    isActive: true
  };

  onChange = isActive => {
    this.setState({
      isActive
    });
  };

  onClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const { isActive } = this.state;
    return (
      <>
        <AlertBox
          show={isActive}
          onClose={this.onChange}
          Component={"Sarah Jhonn"}
          message={"This is an Alert Box!"}
          autoClose={true}
        />
      </>
    );
  }
}

export default Week2;
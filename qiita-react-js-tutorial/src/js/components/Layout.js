import React from "react";
import Header from "./Header";
import Footer from "./Footer"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "monoqlock";
    this.state = {
      name: "monoqlock ",
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    setTimeout(
      () => { this.setState({title: "Welcome monoqlock!!"}); },
      2000
    );

    const title = "Welcome monoqlock";


    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)}  title={this.state.title} />
        <h1>Welcome!</h1>
        <h1>It { this.get_result(2) }!</h1>
        <h1>It { this.state.name }!</h1>
        <Footer/>
      </div>
    );
  }

  get_result(num) {
    return num + 1;
  }
}
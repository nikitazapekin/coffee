
import React from "react";
export default class Counter extends React.Component {
constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      count: 0
    }
  }
setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }
increaseCount = () => {
    return this.setState({...this.state, count: this.state.count + 1});
  }
decreaseCount = () => {
    return this.setState({...this.state, count: this.state.count - 1});
  }
render() {
return (
      <div >
      dedwdwwdwd
      </div>
    );
}
} 
//https://medium.com/nuances-of-programming/5-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BF%D1%80%D0%BE%D0%BC%D0%B5%D0%B6%D1%83%D1%82%D0%BA%D0%B0%D1%85-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BF%D0%B5%D1%80%D0%B5%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%D0%BC%D0%B8-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86-%D0%B2-react-aa996a685e7
import './App.css';
import {  PureComponent } from 'react';

const Temp = (props) => {
  return <div>{props.test}</div>
}

class App extends PureComponent {

  state = {
    val: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 1 }
      })
    }, 2000)

  }


  // shouldComponentUpdate(nextProp, nextState) {
  //   console.log(nextState.val, this.state.val)
  //    return this.state.val != nextState.val
  // }

  render() {
    return (
      <div className="App">
        {console.log(this.state.val)}
        <Temp test={this.state.val} />
      </div>
    );
  }
}

export default App;

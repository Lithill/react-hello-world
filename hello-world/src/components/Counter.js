import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
    };
    
    increment() {
        // this.setState(
        //     { // use setState to update the state. Can't use .state again
        //         count: this.state.count + 1
        //     }, 
        //     () => {
        //         console.log('Callback value', this.state.count)
        //     } // this will be called when the state changes
        // )

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count) // this will be called before the state is updated
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button> 
      </div>
    );
  }
}

export default Counter;

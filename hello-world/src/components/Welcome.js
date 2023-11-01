import React, {Component} from 'react'

// This is a class component

class Welcome extends Component {
    render() {
        const {name, surname} = this.props
        // const {state1, state2} = this.state
        return <h1>Welcome {name} {surname} (Class Component)</h1>
    }
}

export default Welcome
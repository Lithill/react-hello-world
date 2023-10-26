import React, {Component} from 'react'

// This is a class component

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name} {this.props.surname} (Class Component)</h1>
    }
}

export default Welcome
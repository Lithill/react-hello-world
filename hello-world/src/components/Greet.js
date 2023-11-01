import React from 'react'

// This is a functional component

const Greet = props => {
    const {name, surname} = props
    return (
        <div>
            <h1>Hello {name} {surname} (Functional Component)</h1>
        </div>
    )
}

export default Greet
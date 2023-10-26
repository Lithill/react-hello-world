import React from 'react'

// This is a functional component

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} {props.surname} (Functional Component)</h1>
            {props.children}
        </div>
    )
}

export default Greet
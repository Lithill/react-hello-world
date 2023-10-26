import React from 'react'

// Without JSX (vanilla javascript) - functional component

const Hi = () => {
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, "React functional component with vanilla JavaScript")
    )
}

export default Hi
import React from 'react'

function Greeting({name}) {
  return (
    <p>Hello, {name}</p>
  )
}

export default Greeting

/*

Q: What happens if the name variable contains a JSX expression instead of a string?
A: If name contains a JSX expression instead of a string, the component will render the JSX expression as it is.

*/
import React from 'react'

function Greeting() {
  return (
    <h1>Hello, {name}</h1>
  )
}

export default Greeting

/*

Q: What happens if the name variable is not passed to the function?
A: If name is not passed to the Greeting function, the component will render with the text "Hello, "

*/
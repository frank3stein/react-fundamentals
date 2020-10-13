// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useRef, useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input  and a matching value as an `htmlFor` prop on the label.
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("input ref ", inputRef.current.value)
    // onSubmitUsername(e.target.elements.username.value)
    // onSubmitUsername(inputRef.current.value)
    onSubmitUsername(username)

  }



  const inputRef = useRef();

  // 2

  // const [username, setUsername] = useState('')
  // const [error, setError] = useState(null)

  // const handleInput = e => {
  //   console.log(e.target.value)
  //   const inputValue = e.target.value
  //   const isLowerCase = inputValue === inputValue.toLowerCase();
  //   setUsername(inputValue)
  //   setError(isLowerCase ? null : 'Username must be lowercase')
  // }

  // 3 
  const [username, setUsername] = useState('')
  const error = null // to shut the errors
  const handleInput = e => {
    console.log(e.target.value)
    setUsername(e.target.value.toLowerCase())
  }


  // htmlFor is needed for screenreaders, and also when clicked on the label, it has to know which field it should focus on. If has to be htmlFor since for is reserved in javascript. 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="username">Username:</label>
        <input type="text" id='username' ref={inputRef} onChange={handleInput} value={username} />
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

// We use value to update the sate onto the component, so even if it is caps on, it will always write lowercase

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

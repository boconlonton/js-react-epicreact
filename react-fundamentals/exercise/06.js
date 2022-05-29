// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

// Exercise
// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   const handleSubmit = event => {
//     onSubmitUsername(event.target.username.value)
//     event.preventDefault()
//   }

//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// Extra-1: useRef
// function UsernameForm({onSubmitUsername}) {
//   const inputRef = useRef(null)

//   const handleSubmit = () => {
//     onSubmitUsername(inputRef.current.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input ref={inputRef} id="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// Extra-2: useState for validation
// function Message({style, ...otherProps}) {
//   return <div style={{color: 'red', ...style}} {...otherProps} />
// }

// function UsernameForm({onSubmitUsername}) {
//   const inputRef = useRef(null)
//   const [error, setError] = useState(null)

//   const handleChange = () => {
//     const value = inputRef.current.value
//     const isValid = value === value.toLowerCase()
//     setError(isValid ? null : 'Username must be lower case')
//   }

//   // const [username, setUsername] = useState('')
//   const handleSubmit = () => {
//     onSubmitUsername(inputRef.current.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input ref={inputRef} onChange={handleChange} type="text" />
//         <Message role="alert">{error}</Message>
//       </div>
//       <button type="submit" disabled={error ? true : false}>
//         Submit
//       </button>
//     </form>
//   )
// }

// Extra-3: Controlled form
function UsernameForm({onSubmitUsername}) {
  const inputRef = useRef(null)
  const [username, setUsername] = useState(null)

  const handleChange = () => {
    setUsername(inputRef.current.value.toLowerCase())
  }

  // const [username, setUsername] = useState('')
  const handleSubmit = () => {
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          ref={inputRef}
          onChange={handleChange}
          value={username}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

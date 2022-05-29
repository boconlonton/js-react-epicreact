// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

// Exercise
// function Greeting({initialName = ''}) {
//   // 🐨 initialize the state to the value from localStorage
//   // 💰 window.localStorage.getItem('name') ?? initialName
//   const [name, setName] = React.useState(
//     window.localStorage.getItem('name') ?? initialName,
//   )

//   // 🐨 Here's where you'll use `React.useEffect`.
//   // The callback should set the `name` in localStorage.
//   // 💰 window.localStorage.setItem('name', name)
//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//     console.log('useEffect is running')
//   })

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// Extra-1
// function Greeting({initialName = ''}) {
//   const someExpensiveFunction = () => {
//     console.log('Expensive function')
//     return window.localStorage.getItem('name') ?? initialName
//   }

//   // Not lazy
//   // const [name, setName] = React.useState(someExpensiveFunction())

//   // Lazy State Initialization
//   const [name, setName] = React.useState(() => someExpensiveFunction())

//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//     console.log('useEffect is running')
//   })

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// Extra-2
// function Greeting({initialName = ''}) {
//   const someExpensiveFunction = () => {
//     console.log('Expensive function')
//     return window.localStorage.getItem('name') ?? initialName
//   }

//   const [name, setName] = React.useState(() => someExpensiveFunction())

//   // Dependencies Array: name
//   React.useEffect(() => {
//     window.localStorage.setItem('name', name)
//     console.log('useEffect is running')
//   }, [name])

//   function handleChange(event) {
//     setName(event.target.value)
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="name">Name: </label>
//         <input value={name} onChange={handleChange} id="name" />
//       </form>
//       {name ? <strong>Hello {name}</strong> : 'Please type your name'}
//     </div>
//   )
// }

// Extra-3
function useLocalStorateState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) ?? defaultValue,
  )

  React.useEffect(() => window.localStorage.setItem(key, state), [key, state])
  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorateState('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Haha" />
}

export default App

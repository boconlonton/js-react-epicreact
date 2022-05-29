// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {
  PokemonForm,
  fetchPokemon,
  PokemonInfoFallback,
  PokemonDataView,
} from '../pokemon'

// Exercise
// function PokemonInfo({pokemonName}) {
//   // 🐨 Have state for the pokemon (null)
//   const [pokemon, setPokemon] = React.useState(null)
//   // 🐨 use React.useEffect where the callback should be called whenever the
//   // pokemon name changes.
//   // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
//   // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
//   // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null.
//   // (This is to enable the loading state when switching between different pokemon.)
//   // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
//   //   fetchPokemon('Pikachu').then(
//   //     pokemonData => {/* update all the state here */},
//   //   )
//   // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
//   //   1. no pokemonName: 'Submit a pokemon'
//   //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
//   //   3. pokemon: <PokemonDataView pokemon={pokemon} />
//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }
//     setPokemon(null)
//     fetchPokemon(pokemonName).then(pokemonData => {
//       setPokemon(pokemonData)
//     })
//   }, [pokemonName])
//   // 💣 remove this
//   // return 'Submit a pokemon'
//   if (pokemonName) {
//     if (pokemon) {
//       return <PokemonDataView pokemon={pokemon} />
//     } else {
//       return <PokemonInfoFallback name={pokemonName} />
//     }
//   } else {
//     return 'Submit a pokemon'
//   }
// }

// Extra-credit 1
// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)
//   const [error, setError] = React.useState(null)
//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }
//     setPokemon(null)
//     fetchPokemon(pokemonName)
//       .then(pokemonData => setPokemon(pokemonData))
//       .catch(error => setError(error))
//   }, [pokemonName])
//   if (pokemonName) {
//     if (pokemon) {
//       return <PokemonDataView pokemon={pokemon} />
//     } else {
//       if (error) {
//         return (
//           <div role="alert">
//             There was an error:{' '}
//             <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//             <hr />
//           </div>
//         )
//       } else {
//         return <PokemonInfoFallback name={pokemonName} />
//       }
//     }
//   } else {
//     return 'Submit a pokemon'
//   }
// }

// Extra-credit 2
// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)
//   const [status, setStatus] = React.useState('idle')
//   const [error, setError] = React.useState(null)
//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }
//     setPokemon(null)
//     setStatus('pending')
//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setPokemon(pokemonData)
//         setStatus('resolved')
//       })
//       .catch(error => {
//         setError(error)
//         setStatus('rejected')
//       })
//   }, [pokemonName])

//   console.log(status)

//   switch (status) {
//     case 'resolved':
//       return <PokemonDataView pokemon={pokemon} />

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'rejected':
//       return (
//         <div role="alert">
//           There was an error:{' '}
//           <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//           <hr />
//         </div>
//       )

//     default:
//       return 'Submit a pokemon'
//   }
// }

// Extra-credit 3
// function PokemonInfo({pokemonName}) {
//   const [state, setState] = React.useState({status: 'idle', pokemon: null})
//   const [error, setError] = React.useState(null)
//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }
//     setState({status: 'pending', pokemon: null})
//     fetchPokemon(pokemonName)
//       .then(pokemonData => setState({status: 'resolved', pokemon: pokemonData}))
//       .catch(error => {
//         setError(error)
//         setState({status: 'rejected', pokemon: null})
//       })
//   }, [pokemonName])

//   console.log(state)

//   switch (state.status) {
//     case 'resolved':
//       return <PokemonDataView pokemon={state.pokemon} />

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'rejected':
//       return (
//         <div role="alert">
//           There was an error:{' '}
//           <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//           <hr />
//         </div>
//       )

//     default:
//       return 'Submit a pokemon'
//   }
// }

// Extra-credit 6
function PokemonInfo({pokemonName}) {
  const [state, setState] = React.useState({status: 'idle', pokemon: null})
  const [error, setError] = React.useState(null)
  React.useEffect(() => {
    if (!pokemonName) {
      return
    }
    setState({status: 'pending', pokemon: null})
    fetchPokemon(pokemonName)
      .then(pokemonData => setState({status: 'resolved', pokemon: pokemonData}))
      .catch(error => {
        setError(error)
        setState({status: 'rejected', pokemon: null})
      })
  }, [pokemonName])

  console.log(state)

  switch (state.status) {
    case 'resolved':
      return <PokemonDataView pokemon={state.pokemon} />

    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />

    case 'rejected':
      throw error

    default:
      return 'Submit a pokemon'
  }
}

function ErrorFallback({error}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
    </div>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary key={pokemonName} FallbackComponent={ErrorFallback}>
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App

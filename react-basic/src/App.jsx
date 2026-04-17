
import './App.css'
import { useState, useEffect } from 'react' //useState is a Hook that allows you to add state to functional components in React. It returns an array with two elements: the current state value and a function to update that state.
import Greeting from './components/Greeting'
import TabButton from './components/TabButton'

// function App() {
//   const [user, setUser] = useState({ name: "John", age: 30, isBusy: true }); //state acts as a variabel, setUser is a function to update the state.
//   return ( // JSX- JS XML, HTML + JS, syntax extension for JavaScript, allows us to write HTML-like code in our JavaScript files, which React can then render to the DOM.
//     <>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//       {user.isBusy ? <p>He is busy</p> : <p>He is available</p>} {/*conditional rendering, if user.isBusy is true, it will render "Status: Busy"; if false, it will render "Status: Available". */}
//       <button onClick={() => setUser(prev => ({ ...prev, isBusy: !user.isBusy }))}>Change status</button>
//     </>
//   )
// }

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
    if (!name) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError('Name is required');
    }
    else if (name.trim() === '') {
      setError('Name cannot be empty');
    }
    else {
      setError('');
    }

  }, [name]); //dependency array, useEffect will run the effect function whenever the value of name changes. If name is updated, the effect will be executed, logging the new name to the console.

  return (
    <>
      <form>
        <label htmlFor="name">Enter Your Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        {error && <p>{error}</p>}
      </form>
    </>
  )
}

export default App

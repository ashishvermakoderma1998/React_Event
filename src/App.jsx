import { useState } from 'react'
import './App.css'

function App() {
    const shoot = () => {
    alert("Great Shot!");
  }

    const shoot2 = (a) => {
    alert(a);
  }


    const shoot3 = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <>
   <button onClick={shoot}>Take the shot!</button>
    <h1>Ashish</h1>
    {/* with arguments */}
    <button onClick={() => shoot2("Goal!")}>Take the shot!</button>

    {/* react event object */}
    <button onClick={(event) => shoot3("Goal!", event)}>Take the shot!</button>
    <h1>V</h1>
    </>
  )
}

export default App

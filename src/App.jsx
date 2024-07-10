
// import React from 'react'
// import Home from './Home'

// const App = (a) => {
//   console.log(a,"aaaaaaa");
//   return (
//     <div>
//       <h1>hello user</h1>
//       {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora incidunt odio dicta consectetur ex commodi.</p> */}
//       <Home d={a.data}/>
//     </div>
   
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
// let [count,SetCount]=  useState(0)

// function fun1(){
//   SetCount(++count)
// }

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={fun1}>add</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'
import './App.css'

const App = () => {
let [count,SetCount]=  useState("bhopal")

function fun1(){
  SetCount("indore")
}

  return (
    <div>
      <p>{count}</p>
      <button onClick={fun1}>city</button>
    </div>
  )
}

export default App
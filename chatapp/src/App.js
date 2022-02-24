import Signin from "./Pages/Signin.js"
import Signup from "./Pages/Signup.js"
import Home from "./Pages/Home.js"
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "./Context/AuthContext.js"


function App() {

  const { user } = useContext(AuthContext)

  return (
    <Router>
        <div className="App">
        <Routes>

            <Route exact path='/' element={user ? <Home /> : <Signin /> } />

            <Route exact path='/signin' element={user ? <Navigate to='/' /> : <Signin />} />

            <Route exact path='/signup' element={user ? <Navigate to='/' /> : <Signup/>} />

        </Routes>
        </div>
    </Router>
  )
}

export default App;

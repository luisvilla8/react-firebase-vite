import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Login from './routes/Login'
import Navbar from './components/Navbar'
import Nosotros from './routes/Nosotros'
import RequireAuth from './components/RequireAuth'


const App = () => {
  return (
    <>
      <Navbar />  
      <h1>App</h1>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/nosotros' element={
          <RequireAuth>
            <Nosotros />
          </RequireAuth>
        }/>
      </Routes>
    </>
  )
}

export default App

import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"


const Navbar = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      {
        user 
          ? 
            <>
              <NavLink to='/'>Hacia Home</NavLink>
              <NavLink to='/nosotros'>Hacia Nosotros</NavLink>
              <button onClick={() => setUser(false)}>Log Out</button>
            </>
          :
            <>
              <NavLink to='/login'>Hacia Login</NavLink>
            </>

      }
    </div>
  )
}

export default Navbar
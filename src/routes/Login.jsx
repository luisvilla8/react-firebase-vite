import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider"

const Login = () => {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogin = () => {
    setUser(true);
    navigate("/");
  }

  return (
    <div>
      Login
      <br />
      {
        user ? "onlaiii" : "offline"
      }
      <button onClick={handleClickLogin}>CLI</button>
    </div>
  )
}

export default Login
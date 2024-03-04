import { useContext } from "react";
import { AuthContext } from '../context/authContext'
import { Link } from "react-router-dom";
import {supabase } from '../utils/supabaseConfig'
function App() {

  const { session } = useContext(AuthContext)


  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if ( error) {
      alert(error)
    }
  }
  
  return (
    <>
      {
        session ? <div>Landing Page <button onClick={signOut}>Logout</button></div> : 
        <>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </>
      }
    </>
  )
}

export default App;

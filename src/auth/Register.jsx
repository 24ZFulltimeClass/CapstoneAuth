import { useState } from "react"
import { supabase } from '../utils/supabaseConfig'

const Register = ()=> {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    async function signUpNewUser(e) {
        e.preventDefault();
        
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
          options: {
            emailRedirectTo: 'http://localhost:5173/',
          },
        })

        if ( error ) {
            console.log(error)
        } else {
            console.log(data)
        }
      }
      
    return (
        <form onSubmit={signUpNewUser}>
            <h2>Register</h2>
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

            <button type="submit">Submit</button>
        </form>
    )
}

export default Register
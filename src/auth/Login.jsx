import { useState } from "react";
import { supabase } from "../utils/supabaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail(e) {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if ( error ) {
        console.log(error)
    } else {
        console.log(data)
        window.location.href = '/'
    }
  }
  
  return (
    <form onSubmit={signInWithEmail}>
      <h2>Login</h2>

      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;

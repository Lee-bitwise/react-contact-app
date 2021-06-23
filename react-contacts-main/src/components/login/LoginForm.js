import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser } = useAuth();
    function handleSubmission(e) {
        e.preventDefault();
        console.log("Submitted: ", e);
        loginUser(username, password);
    }
    return (
        <form onSubmit={handleSubmission}>
            <div className="form_group">
                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    name="username"
                    type="text"   
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div className="form_group">
                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    name="password"
                    type="password" 
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div style={{marginTop: "1.5rem"}}>
                <button type="submit">Login</button>
            </div>
        </form>
    )
    
}

export default LoginForm;
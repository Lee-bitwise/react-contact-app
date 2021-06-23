import React, { useState } from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log("Submitted: ", event)
    }
        return (
            <form onSubmit={handleFormSubmit}>
                <div className="form_group">
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username"
                        name="username"
                        type="text" 
                        placeholder="Username"  
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="form_group">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password"
                        name="password"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        )
}

export default RegisterForm;
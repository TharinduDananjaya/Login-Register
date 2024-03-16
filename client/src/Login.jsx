import React, { useState } from "react";  
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {  
    const navigate = useNavigate();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
        .then((res) => {
            console.log(res);
            if (res.data === "success") {
                navigate('/home');
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25"> 
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Enter Email" 
                        autoComplete="off" 
                        name="email" 
                        className="form-control rounded-0" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        autoComplete="off" 
                        name="password" 
                        className="form-control rounded-0" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Login
                </button>
                <p>Don't Have an Account</p>
                <Link to="/register" className="btn btn-default border w-100 rounded-0 text-decoration-none">
                    Register
                </Link>
            </form>
            </div>
        </div>
    );
}

export default Login;

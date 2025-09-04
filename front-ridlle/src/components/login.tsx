import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import h1 from "../assets/head.png";
import '../css/login.css'




export default function Login(props:any) {

    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const gest = () => {
        navigate("/Play")
    }

    const login = async () => {
        try {
            const response = await fetch("http://localhost:3000/player/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, password, role }),
            });
            const result = await response.json();
            if (response.ok) {
                navigate("/Play")
                localStorage.setItem("1", result.token)
                if (result.role==='admin'){
                    props(result.role)
                }
            } else {
                console.log(result.message);
            }
        } catch (err) {
            console.error(" Request error:", err);
            return null;
        }
    };

    return (
        <>
            
            <div className="login">
                <img id="head" src={h1} alt="" />
                <  input className="login-input"
                    type="text"
                    name="name"
                    placeholder="input your name"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input className="login-input"
                    type="password"
                    name="password"
                    placeholder="input your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <select className="login-input" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">בחר</option>
                    <option value="user">משתמש</option>
                    <option value="admin">מנהל</option>
                </select>
                <button className="btn" onClick={login}>כניסה/הרשמה</button>
                <button className="btn" onClick={gest}>אורח</button>

            </div>
        </>
    );
}

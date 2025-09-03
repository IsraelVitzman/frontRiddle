import { useState } from "react";

export default function Login() {
    const [name, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const response = await fetch("http://localhost:3000/player/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, password }),
            });

            const result = await response.json();
            if (response.ok) {
                console.log(result.message);
                console.log(result.token);
                localStorage.setItem("1",result.token)
            } else {
                console.log(result.message);
            }
        } catch (err) {
            console.error(" Request error:", err);
            return null;
        }
    };

    return (
        <div className="login">
            <input
                type="text"
                name="name"
                placeholder="input your name"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                name="password"
                placeholder="input your password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <select id="rank" name="rank" required>
                <option value="">בחר</option>
                <option value="user">משתמש</option>
                <option value="editor">מנהל</option>
            </select>
            <button onClick={login}>כניסה</button>
        </div>
    );
}

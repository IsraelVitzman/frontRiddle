import { useState } from "react";
import { useRef } from "react";

export default function BestPlayer() {
    const name = useRef<HTMLInputElement>(null)

    const [user, setUser] = useState<any>(null);

    const send = async () => {
        if (!name) return
        const loadRiddles = async () => {
            try {
                const response = await fetch(`http://localhost:3000/resultGame/resultBestPlayer/${name.current!.value}`);
                const data = await response.json();
                setUser(data)

            } catch (err) {
                console.error(err);
            }
        };
        loadRiddles();
    };

    return (
        <>
            <div className="SwohBestUser">
                <input type="text" name="name" placeholder="name" ref={name} />
                <button onClick={() => send()}>שלח</button>

                {user && user.results && user.results.map((u: any) => (
                    <div key={u.id}>
                        <p>שם: {u.name}</p>
                        <p>ממוצע זמן: {u.averge_time}</p>
                        <p>סה"כ זמן: {u.all_time}</p>
                    </div>
                ))}


            </div>
        </>

    );
}
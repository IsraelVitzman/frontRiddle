import { useState } from "react";
import { useEffect } from "react";

export default function BestPlayers() {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const loadRiddles = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/resultGame/resultBestAllPlayers"
                );
               
                const data = await response.json();
                setUsers(data.results);
            } catch (err) {
                console.error("Fetch error:", err);
            }
        };

        loadRiddles();
    }, []);

    return (
        <div className="SwohBestUsers">
            {users.length === 0 ? (
                <p>אין נתונים להצגה</p>
            ) : (
                users.map((u: any) => (
                    <div key={u.id}>
                        <p>שם: {u.name}</p>
                        <p>ממוצע זמן: {u.averge_time}</p>
                        <p>סה"כ זמן: {u.all_time}</p>
                    </div>
                ))
            )}
        </div>
    );
}


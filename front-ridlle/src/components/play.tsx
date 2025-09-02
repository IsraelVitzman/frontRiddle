import { useState, useEffect } from "react";
import { time, addTimeForAllRidders, addSecondsForQuestion, returnTime } from "./time.tsx";

export default function Play() {
  const [riddles, setRiddles] = useState<any[]>([]);
  const [timeAll, setTimeAll] = useState<number | null>(null);

  // טוען את החידות מהשרת
  useEffect(() => {
    const loadRiddles = async () => {
      try {
        const response = await fetch("http://localhost:3000/riddles/getAllRiddlesToGame");
        const data = await response.json();
        setRiddles(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadRiddles();
  }, []);

  // פונקציה שמפעילה את הלוגיקה של חידה
  const handleRiddle = async (riddle: any) => {
    const startTime = time();
    // כאן אפשר לקרוא לפונקציות אחרות שלך
    console.log("Riddle ID:", riddle.id);
    console.log("Riddle Name:", riddle.name);

    // מדידה לדוגמא של זמן לשאלה
    const endTime = time();
    addTimeForAllRidders(returnTime(startTime, endTime));
  };

  return (
    <div>
      <h1>חידות</h1>
      <ul>
        {riddles.map((r) => (
          <li key={r.id}>
            {r.name} 
            <button onClick={() => handleRiddle(r)}>הפעל חידה</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

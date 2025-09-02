import { useState, useEffect } from "react";
import { time, addTimeForAllRidders,  returnTime } from "./time.tsx";

export default function Play() {
  const [riddles, setRiddles] = useState<any[]>([]);
  

  
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

  
  const handleRiddle = async (riddle: any) => {
    const startTime = time();
    
    console.log("Riddle ID:", riddle.id);
    console.log("Riddle Name:", riddle.name);

    
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

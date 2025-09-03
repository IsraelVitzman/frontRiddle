import { useState, useEffect } from "react";

export default function SwohRiddle() {
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

  return (
    <>
      <div className="SwohRiddle">
        {
          riddles.map((riddle) => (
            <div key={riddle._id}>
              <h3>{riddle.name}</h3>
              <p>{riddle.hint}</p>
              <p>{riddle.question}</p>
              <p>{riddle.answer}</p>
            </div>
          ))
        }
      </div>
    </>

  );
}

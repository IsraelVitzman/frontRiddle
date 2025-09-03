import { useState, useEffect, useRef } from "react";


export default function Play() {
  const [riddles, setRiddles] = useState<any[]>([]);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [count, setcount] = useState(0);
  const updateRiddleTime= useRef<number[]>([])
  useEffect(() => {
    const loadRiddles = async () => {
      try {
        const response = await fetch("http://localhost:3000/riddles/getAllRiddlesToGame");
        const data = await response.json();
        console.log(data);
        
        setRiddles(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadRiddles();
  }, []);
  
 
  const checkAnswer = () => {
    updateRiddleTime.current.push(Date.now())
    if (answer.toLowerCase() === "hint") {
      setMessage(`Hint: ${riddles[count].hint}`);
      return;
    }

    if (answer.toLowerCase() === riddles[count].answer.toLowerCase()) {
      setcount(count+1)
      updateRiddleTime.current.push(Date.now())
      setMessage("Good answer!");
    } else {
      setMessage("This is a mistake... try again");
    }
  }

  if (riddles.length === 0) {
    return <p>טוען חידות...</p>;
  }
  
  
  return (
    
    <div>
      <h1>חידות</h1>
      
      <ul>
        
        <li>{riddles[count].id}
        <h4>{riddles[count].name}</h4>
        <h4>{riddles[count].question}</h4>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your answer"
        />
        <button onClick={checkAnswer}>check</button>
        <p>{message}</p>
      </li>
    </ul>
    
    </div >
  );
}

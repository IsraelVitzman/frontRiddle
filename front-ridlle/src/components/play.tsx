import { addTimeForAllRidders, returnTime, time, addSecondsForQuestion } from "./time.tsx"
import { useEffect, useState } from "react";
export default function Play() {

    const [riddles, setRiddles] = useState([]);
    const [timeAll,setTimeAll]=useState(null)
    const [timeForRiddle,setTimeForRiddle]=useState([])

    try {
        useEffect(() => {
            const response: any = fetch("http://localhost:3000/riddles/getAllRiddlesToGame")
            const data = response.json();
            setRiddles(data)
        }, [])
    } catch (err) {
        console.error(err);
    }


    const Riddles = async (riddles: any) => {
        const startTime = time();
        for (const riddle of riddles) {
            await Riddle(riddle);
        }
        const endTime = time();
        addTimeForAllRidders(returnTime(startTime, endTime));
    }

    const Riddle = async (riddle: any) => {
        const startTime = time();
        Questions(riddle)
        const endAskTime = time();
        addSecondsForQuestion(returnTime(startTime, endAskTime));
    }

    const Questions = (ridder: any) => {
        let answer = null;

        console.log(`Riddle ID: ${ridder.id}`);
        console.log(`Riddle Name: ${ridder.name}`);

        do {
            console.log(`Question: ${ridder.question}`);
            answer = ""
            if (answer.toLowerCase() === "hint") {
                console.log(`Hint: ${ridder.hint}`);

            }

            if (answer.toLowerCase() !== ridder.answer.toLowerCase()) {

            }
        } while (answer.toLowerCase() !== ridder.answer.toLowerCase());


    }
    return (
        <div>
            <h1>חידות{}</h1>
            {}
            <ul>{riddles.map((element)=>Riddles(element))}</ul>
        </div>
    )
}
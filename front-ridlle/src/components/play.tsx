import{addTimeForAllRidders ,returnTime,time,addSecondsForQuestion}from "./time.tsx"
export default function Play() {
    const ManegerGame = async ()=> {
        try {
            
        } catch (err) {
            console.error(err);
        }

    }
    const Riddles = async(riddles:any)=> {
        const startTime = time();
    for (const riddle of riddles) {
        await Riddle(riddle);
    }
    const endTime = time();
    addTimeForAllRidders(returnTime(startTime, endTime));
}

const Riddle =async(riddle:any) =>{
    const startTime = time();
    await Questions(riddle)
    const endAskTime = time();
    addSecondsForQuestion(returnTime(startTime, endAskTime));
}

const Questions =(ridder:any)=> {
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
            console.log("This is a mistake... try again");
            console.log("-------------------------");
        }
    } while (answer.toLowerCase() !== ridder.answer.toLowerCase());

    console.log("Good answer!");
}
}
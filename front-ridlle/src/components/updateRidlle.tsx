import { useRef } from "react";

export default function UpdateRiddle() {
    const id = useRef<HTMLInputElement>(null)
    const name = useRef<HTMLInputElement>(null)
    const hint = useRef<HTMLInputElement>(null)
    const question = useRef<HTMLInputElement>(null)
    const answer = useRef<HTMLInputElement>(null)

    const send = async () => {
        const token = localStorage.getItem("1");
        
        if (!id || !name || !hint || !question || !answer) {
            console.error(" אחד השדות ריק, לא ניתן לשלוח");
            return;
        }
        const data = {
            name: name.current!.value,
            hint: hint.current!.value,
            question: question.current!.value,
            answer: answer.current!.value,
        };
        try {

            const response = await fetch(`http://localhost:3000/riddles/updateRiddle/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            const result = await response.json()
            console.log(result);

        } catch (err) {
            console.log("invalid eroor:", err);
        }
    }

    return (
        <div className="createRiddle">
            <input type="text" name="id" placeholder="id" ref={id}/>
            <input type="text" name="name" placeholder="name" ref={name} />
            <input type="text" name="hint" placeholder="hint" ref={hint} />
            <input type="text" name="question" placeholder="question" ref={question} />
            <input type="text" name="answer" placeholder="answer" ref={answer} />
            <button onClick={() => send()}>שלח</button>
        </div>)
}
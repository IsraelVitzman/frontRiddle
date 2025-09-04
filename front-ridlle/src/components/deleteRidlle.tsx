import { useRef } from "react";


export default function DeleteRiddle() {
    const id = useRef<HTMLInputElement>(null)
    const token = localStorage.getItem("1");
    const send = async () => {
        if (!id) return
        try {
            const response = await fetch(`http://localhost:3000/riddles/deleteRiddle${id.current!.value}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                     "Authorization": `Bearer ${token}`
                }
            })
            const result = await response.json()
            console.log(result.message);  

        } catch (err) {
            console.log("invalid eroor :", err);
        }
    }
    return (<>
        <div className="deleteRidlle">
            <input type="text" name="id" placeholder="id" ref={id} />
            <button onClick={()=>send()}>שלח</button>
        </div>
    </>)
}
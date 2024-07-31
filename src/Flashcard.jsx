import { useState } from "react"


const Flashcard = (props) => {
    const [flipped, setFlipped] = useState(false)

    const flip = () => { 
        setFlipped(!flipped) 
    }
    return (
        <>
        <div className="flex flex-col border items-center justify-center" onClick={flip}>
         <p className=" font-bold font-serif text-xl text-blue-500">{props.id}</p>
         {flipped?(<p>{props.answer}</p>):(<p>{props.question}</p>)}
        </div>
        </>
    )
}


export default Flashcard
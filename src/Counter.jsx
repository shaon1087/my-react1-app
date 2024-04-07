import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
  
    console.log();
    const handleClick = () =>{
        const newCount = count + 1;
        setCount(newCount);

    }
    const handleClick2 = () =>{
        const newCount = count - 1;
        setCount(newCount);

    }

    return(
        <>
        <div style={{border: '1px solid yellow'}}> 
        <h3>Counter: {count}</h3>
        <button onClick={handleClick}>Add : {setCount}</button>
        <button onClick={handleClick2}>Reduce : {setCount}</button>
        </div>

        </>
    )
}
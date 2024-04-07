import { useState } from "react"

export default function Team(){
    const [team,setTeam]= useState(11);
    const handleAdd=() => {
        const newTeam = team + 1;
        setTeam(newTeam);}
    const handleAdd2=() => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    const teamStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '10px',
        borderRadius: '15px'
    }
    return(
        <>
        <div style={teamStyle}>
        <h3>player:{team}</h3>
        <button onClick={handleAdd} >ADD</button>
        <button onClick={handleAdd2} >REDUCE</button>
        </div>
        
        </>
    )

    }
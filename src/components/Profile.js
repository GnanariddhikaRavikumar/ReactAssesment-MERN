//functional components
import { useState } from "react";

const Profile=(props)=>{
    //const 
    const [count, setCount ]=useState(0);
    const [count1,setCount1]=useState(0);

    function updateCount(){
        setCount(1);
        setCount1(2);
    }

    return (
    <div className="Profile">
    
    
    <h2>Name :{props.name}</h2>
    <h2>Availables: {props.dress}</h2>
    <h2>Rating: {props.rate}</h2>
    <h2>Star:{count}</h2>
    <button onClick={updateCount}>ADD YOUR STAR</button>
    </div> 
)};

export default Profile;
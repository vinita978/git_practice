import { useState,useRef} from "react";
import "./Demo.css"
function Demo(){
    let x=0;
    const [y,setY]=useState(0)
    const z=useRef(0)
    function handleUpdataCount(){
        x=x+1
        console.log(x)
    }
    function handleY(){
        setY(y+1)
    }
    function handleZ(){
        z.current=z.current+1
        console.log(z.current)
    }
    return(
        <>
        <div className="container">
            <h1>{x}</h1>
            <button onClick={handleUpdataCount}>Increase X</button>
            <h1>{y}</h1>
            <button onClick={handleY}>Increase Y</button>
            <h1>{z.current}</h1>
            <button onClick={handleZ}>Increase Z</button>
        </div>
        </>
    )
}
export default Demo;
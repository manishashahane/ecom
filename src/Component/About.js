import { useRef, useState } from "react";

function About(){

    // const username = useRef();

    const [username,setUsername] = useState('');
    
    const onhandlesubmit = (event)=>{
        event.preventDefault();
        console.log(username);
        // console.log(username);//object of input
        // console.log(username.current.value);//data
    }
    const onhandlechange = (event)=>{
        setUsername(event.target.value);
    }
    return(<>
    <p>about</p>
    <form onSubmit={onhandlesubmit}> 
       
        <input
        name="username"
        value={username}
        onChange={onhandlechange}
        />
        <button type="submit">Submit</button>
    </form>
    </>);
}
export default About;
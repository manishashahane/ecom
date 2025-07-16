import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Home(){

    const context = useContext(ThemeContext);
    console.log(context);
    // const{theme:theme1}= useContext(ThemeContext);
    // console.log(theme1);
    
    return(<>
    <p>Home page</p>
    </>);
}
export default Home;
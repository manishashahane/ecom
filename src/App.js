import { use, useEffect, useState } from "react";
import Productlist from "./Productlist";
import { useApi } from "./hooks/useApi";
 
function App(){

    // const[products,setProducts] = useState([]);
    // const [cnt,setCnt] = useState(0);
    const[url,setUrl] = useState(`http://localhost:3000/product`);
    const{products:product,loading:load}=useApi(url);
    console.log(product);

    // useEffect(()=>{
    //     fetch(url)
    //     .then(data=>data.json())
    //     .then(res=>setProducts(res));
    // },[url])

    // const fetchdata = () =>{
    //     fetch('http://localhost:3000/product')
    //     .then(data=>data.json())
    //     .then(res=>setProducts(res));
    // }
    // fetchdata();

    console.log("render");
    return(
        <>
        <p>Productlist</p>
        {/* <button onClick={()=>setCnt(cnt+1)}>CallApi</button> */}
        <div id="btn1">
            <button className="btn btn-success"
            onClick={()=>setUrl(`http://localhost:3000/product`)}>All</button>

            <button className="btn btn-primary"
            onClick={()=>setUrl(`http://localhost:3000/product?category=Smartphone`)}>Mobile</button>

            <button className="btn btn-danger"
            onClick={()=>setUrl(`http://localhost:3000/product?category=Laptop`)}>Laptop</button>

            <button className="btn btn-warning"
            onClick={()=>setUrl(`http://localhost:3000/product?category=Watch`)}>Watch</button>

            <button className="btn btn-info"
            onClick={()=>setUrl(`http://localhost:3000/product?category=TV`)}>TV</button>
            
        </div><br/><br/>
        {load && <div className="spinner-grow text-success"></div>}
       <div id="p"> <Productlist products1={product}/></div>
        </>  )
}
export default App;

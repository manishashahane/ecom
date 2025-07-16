import Product from "./Product";

function Productlist(props){
    const prod = props.products1;
    return(
        <>
        <p>Products</p>
        {/* <Product {...prod[0]}/>
        <Product {...prod[1]}/>
        <Product {...prod[2]}/>
        <Product {...prod[3]}/>
        <Product {...prod[4]}/>
        <Product {...prod[5]}/> */}
        {
            prod && prod.map((p,ind)=>{
                return(
                    <Product {...p} key={ind}/>
                );
            })
        }
        </>
    );
}
export default Productlist;

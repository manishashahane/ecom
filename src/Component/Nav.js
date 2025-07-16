import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import dark from
import light from

function Nav(){

  const {theme:theme} = useContext(ThemeContext);
  console.log(theme);

   let myStyle = {};
   if(theme === 'light'){
    myStyle = {
      background:'#3498db',
      color:'#111010ff'
    }
   }
   else{
    myStyle= {
      background:'#e91e63',
      color:'#f4f0f0ff'
    }
   }
    return(<>
    <header>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={myStyle} onClick={()=>SVGTextPathElement('dark')}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
  

<ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link active" to="/home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item">s
    <Link className="nav-link" to="/contact">ContactUs</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/services">Services</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="/product">Products</Link>
  </li>

  <li>
    {
      theme === 'light' ?
      (
        <img src={dark} onClick={()=>setTheme('dark')}/>
      )
      :
      (
        <img src={light} onClick={()=>setTheme('light')}/>
      )
      
    }
  </li>
</ul>
</div>
</nav>
    </header>
    <main>
        <Outlet/>
    </main>

    </>);
}
export default Nav;
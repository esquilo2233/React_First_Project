import logo from "./Logos/g14.png"
import "./nav.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navb">

         {/*Logo div */}
         <div className="nvl">
         <Link to="/"><img className="nvl" src={logo} alt="" /></Link>
         </div>
         {/*Links div */}
           <div className="links">
            <Link className="separador" to="../AboutUs">AboutUs</Link>
           </div>

         </nav>
     );
}
 
export default NavBar;
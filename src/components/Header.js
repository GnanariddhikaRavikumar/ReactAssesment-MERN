import {Link} from "react-router-dom";

const Header=()=>{return (
    <nav className="header">
      <img 
      className="food-logo"
      src="https://i.pinimg.com/736x/97/06/4a/97064afe1f9c2ca3fc562b87f23b7adc.jpg"  
      alt="Shopping-Logo"> 
      </img>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/About" >ABOUT</Link></li>
        <li><Link to="/Contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
  };

  //instead of anchor tag we use Link tag because it will not rerender the whole page what anchor tag does

  export default Header;
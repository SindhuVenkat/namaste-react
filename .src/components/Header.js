import { LOGO_URL } from "../../utls/Constants";
import { useState } from "react";
const Header = () => {
    const[loginbtn, setLoginbtn] = useState('Login')
    return(
        <div className="logo-container">
        <div className="logo">
            <img src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li><button onClick={() => {
                   loginbtn === 'Login' ? setLoginbtn('Logout') :  setLoginbtn('Login')
                }}>{loginbtn}</button></li>
            </ul>
        </div>
        </div>
    )
}

export default Header;
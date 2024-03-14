import { LOGO_URL } from "../../utls/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../../utls/useOnlineStatus";
const Header = () => {
    const[loginbtn, setLoginbtn] = useState('Login')
    const onlinestatus = useOnlinestatus()
    return(
        <div className="logo-container">
        <div className="logo">
            <img src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Onlinestatus : {onlinestatus ? 'green' : 'red'}</li>
                <li>

                    <Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
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
import { LOGO_URL } from "../../utls/Constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../../utls/useOnlineStatus";
import UserContext from "../../utls/UserContext"
import { UseSelector, useSelector } from "react-redux";
const Header = () => {
    const[loginbtn, setLoginbtn] = useState('Login')
    const onlinestatus = useOnlinestatus()
    const {loggedInuser} = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart1.items1 )
console.log(cartItems,'cartItems1')
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
                <li><Link to='/cart'>Cart - {cartItems.length} </Link></li>
                <li><button onClick={() => {
                   loginbtn === 'Login' ? setLoginbtn('Logout') :  setLoginbtn('Login')
                }}>{loginbtn}</button></li>
                <li>{loggedInuser}</li>
            </ul>
        </div>
        </div>
    )
}

export default Header;
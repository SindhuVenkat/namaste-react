import { LOGO_URL } from "../utls/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utls/useOnlineStatus";
import UserContext from "../utls/UserContext"
import { UseSelector, useSelector } from "react-redux";
const Header = () => {
    const[loginbtn, setLoginbtn] = useState('Login')
    const onlinestatus = useOnlinestatus()
    const {loggedInuser} = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart1.items1 )
console.log(cartItems,'cartItems1')
    return(
       
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
            <img className="w-24" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Onlinestatus : {onlinestatus ? 'green' : 'red'}</li>
                <li className="px-4">

                    <Link to='/'>Home</Link></li>
                <li className="px-4"><Link to='/about'>About</Link></li>
                <li className="px-4"><Link to='/contact'>Contact</Link></li>
                <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart - {cartItems.length} </Link></li>
               <button  className="login" onClick={() => {
                   loginbtn === 'Login' ? setLoginbtn('Logout') :  setLoginbtn('Login')
                }}>{loginbtn}</button>
                <li className="px-4">{loggedInuser}</li>
            </ul>
        </div>
        </div>
  
    )
}

export default Header;
import { LOGO_URL } from "../../utls/Constants";

const Header = () => {
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
            </ul>
        </div>
        </div>
    )
}

export default Header;
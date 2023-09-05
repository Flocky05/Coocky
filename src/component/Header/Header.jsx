
import './Header.css'
import logo from '../../assets/images/favicons/favicons.png'
const Header = () => {
    return (
        <nav className='header'>
            <div className='header-left'>
                <img src={logo} alt="" />
                <a href="/home">Coocky</a>
            </div>
            <div className='header-right'>
                <a href="/Home">Order</a>
                <a href="/Home">Blog</a>
                <a href="/Home">About Us</a>
                <a href="/Home">Login</a>
            </div>
        </nav>
    );
};

export default Header;
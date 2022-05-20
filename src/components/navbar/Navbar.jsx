import './Navbar.scss';
import airbnblogo from '../../airbnb_logo.png';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={airbnblogo}></img>
        </nav>
    )
} 
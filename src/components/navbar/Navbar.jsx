import './Navbar.scss';
import airbnblogo from '../../assets/logo/airbnb_logo.png';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={airbnblogo} alt="Airbnb logo along with the brand name"></img>
        </nav>
    )
} 
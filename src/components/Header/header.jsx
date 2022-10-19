import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'


function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <div className='links'>
                <Link className='navLink' to="/">Accueil</Link>
                <Link className='navLink' to="/a-propos">A Propos</Link>
            </div>
        </div>
    )
}

export default Header

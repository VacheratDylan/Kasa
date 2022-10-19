import logo_white from '../../assets/logo_white.png'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo_white} alt="Logo Kasa blanc" />
            <p className='footer_p'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
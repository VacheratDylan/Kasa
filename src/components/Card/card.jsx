import { Link } from 'react-router-dom'
import './card.css'

function Card({ id, name, img, description }) {
    return (
        <Link className='card' to={`/product/${id}`}>
            <div className='card_img' alt={description} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${img}) `, backgroundSize: `cover` }} />
            <p className='card_p'>{name}</p>
        </Link>
    )
}

export default Card
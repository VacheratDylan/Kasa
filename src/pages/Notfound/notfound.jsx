import { Link } from 'react-router-dom'
import './notfound.css'


function Notfound() {
    return (
        <div className='notfound'>
            <h1 className='notfound_title'>404</h1>
            <p className='notfound_p'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={`/`}>
                <p className='notfound_link'>Retourner sur la page d'accueil</p>
            </Link>
        </div>
    )
}

export default Notfound

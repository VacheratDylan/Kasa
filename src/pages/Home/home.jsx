import Card from '../../components/Card/card'
import Annonces_logement from '../../assets/Annonces_logement.json'
import './home.css'


function Home() {
    return (
        <div className='home'>
            <div className='home_bg_container'>
                <div className='home_bg' alt="Montagnes bord de mer" />
                <p className='home_p'>Chez vous, partout et ailleurs</p>
            </div>
            <div className='card_list'>
                {Annonces_logement.map((annonce, index) => (
                    <Card
                        key={annonce.id}
                        id={annonce.id}
                        name={annonce.title}
                        img={annonce.cover}
                        description={annonce.description}>
                    </Card>


                ))}
            </div>
        </div>
    )
}

export default Home

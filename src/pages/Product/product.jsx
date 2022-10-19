import { useParams } from 'react-router-dom'
import Annonces_logement from '../../assets/Annonces_logement.json'
import './product.css'
import Picture from '../../components/Picture/picture'
import Tag from '../../components/Tag/tag';
import Dropdown from '../../components/Dropdown/dropdown';
import Rating from '../../components/Rating/rating';

function Product() {
    const { id } = useParams();
    const json = JSON.parse(JSON.stringify(Annonces_logement))
    const annonce = json.find(element => element.id === id)
    const rating = parseInt(annonce.rating);


    return (
        <div className='product'>
            <Picture
                key={annonce.id}
                annonce={annonce}
            />
            <div className='content'>
                <div>
                    <h1 className='content_title'>{annonce.title}</h1>
                    <p className='content_location'>{annonce.location}</p>
                    <div className='content_tags'>
                        {annonce.tags.map((tag, index) => (
                            <Tag
                                key={index}
                                tag={tag}
                            />
                        ))}
                    </div>
                </div>
                <div className='right'>
                    <div className='host'>
                        <p className='host_name'>{annonce.host.name}</p>
                        <img src={annonce.host.picture} alt="Ebergeur" className='host_img' />
                    </div>
                    <Rating
                        key={annonce.id + rating}
                        rating={rating}
                    />
                </div>
            </div>
            <div className='dropdowns'>
                <Dropdown
                    key={annonce.id}
                    title="Description"
                >
                    <p>{annonce.description}</p>
                </Dropdown>
                <Dropdown
                    key={annonce.id + annonce.equipments}
                    title="Equipements"
                >
                    <ul>
                        {annonce.equipments.map(equipement => <li key={equipement}>{equipement}</li>)}
                    </ul>
                </Dropdown>
            </div>
        </div>
    )
}

export default Product
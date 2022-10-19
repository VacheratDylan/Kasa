
import './propos.css'
import Dropdownpropos from '../../components/Dropdownpropos/dropdownpropos'


function Propos() {
    return (
        <div className='propos'>
            <div alt="montagnes" className='propos_img' />
            <div className='propos_dropdowns'>
                <Dropdownpropos
                    key={"Dropdown1"}
                    title="Fiabilité"
                >
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </Dropdownpropos>
                <Dropdownpropos
                    key={"Dropdown2"}
                    title="Respect"
                >
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Dropdownpropos>
                <Dropdownpropos
                    key={"Dropdown3"}
                    title="Service"
                >
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Dropdownpropos>
                <Dropdownpropos
                    key={"Dropdown4"}
                    title="Sécurité"
                >
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Dropdownpropos>
            </div>
        </div>

    )
}

export default Propos

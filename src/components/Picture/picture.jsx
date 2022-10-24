import './picture.css'
import React from 'react'
import arrow_back from '../../assets/arrow_back.png'
import arrow_forward from '../../assets/arrow_forward.png'

function Picture({ annonce }) {

    const [sourceimg, setSourceimg] = React.useState(annonce.pictures[0]);
    const [imageid, setImageid] = React.useState(0);

    let arrowactive = false;
    if (annonce.pictures.length < 2) {
        arrowactive = true;
    }

    const componentDidMount = () => {
        annonce.pictures.forEach((picture) => {
            const img = new Image();
            img.src = picture;
        });
    }
    componentDidMount();

    const backimage = () => {
        let id;

        if (imageid === 0) {
            id = annonce.pictures.length - 1;
            setImageid(id);
        }
        else {
            id = imageid - 1;
            setImageid(id);
        }
        setSourceimg(annonce.pictures[id]);
    }

    const forwardimage = () => {
        let id;
        if (imageid === annonce.pictures.length - 1) {
            id = 0;
            setImageid(id);
        }
        else {
            id = imageid + 1;
            setImageid(id);
        }
        setSourceimg(annonce.pictures[id]);
    }

    return (
        <div className='picture' style={{ backgroundImage: `url(${sourceimg})` }} alt={annonce.title}>
            <img className='arrow_back' src={arrow_back} alt="fleche arriere" onClick={backimage} hidden={arrowactive} />
            <img className='arrow_forward' src={arrow_forward} alt="fleche avant" onClick={forwardimage} hidden={arrowactive} />
        </div>
    )
}

export default Picture
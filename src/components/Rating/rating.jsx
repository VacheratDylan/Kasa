import './rating.css'
import React from 'react'
import star from '../../assets/star.png'
import starfill from '../../assets/starfill.png'


function Rating({ rating }) {

    const rate = () => {
        let tab = [];
        for (let index = 0; index < parseInt(rating); index++) {
            tab.push(starfill);
        }
        for (let index = 0; index < 5 - parseInt(rating); index++) {
            tab.push(star)
        }
        return tab;
    }

    return (
        <div className='rating'>
            {rate().map((star, id) => <img key={star + id} src={star} alt="etoile" className='star' />)}
        </div>
    )
}

export default Rating
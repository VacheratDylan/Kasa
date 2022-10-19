import './dropdownpropos.css'
import React from 'react'
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'

function Dropdownpropos({ title, children }) {

    const [sourcearrow, setSourcearrow] = React.useState(arrow_up);
    const [content, setcontent] = React.useState(false);

    const dropdownswitch = () => {
        if (sourcearrow === arrow_down) {
            setSourcearrow(arrow_up);
            setcontent(false);
        }
        else {
            setSourcearrow(arrow_down);
            setcontent(true);
        }
    }

    return (
        <div className='dropdownpropos'>
            <div className='dropdownpropos_header' onClick={dropdownswitch}>
                <p className='dropdownpropos_title'>{title}</p>
                <img src={sourcearrow} alt="fleche" className='dropdownpropos_img' />
            </div>
            <div className='dropdownpropos_content' hidden={content}>
                <div className='dropdownpropos_content_space'>{children}</div>
            </div>
        </div>

    )
}

export default Dropdownpropos
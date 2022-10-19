import './dropdown.css'
import React from 'react'
import arrow_up from '../../assets/arrow_up.png'
import arrow_down from '../../assets/arrow_down.png'

function Dropdown({ title, children }) {

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
        <div className='dropdown'>
            <div className='dropdown_header' onClick={dropdownswitch}>
                <p className='dropdown_title'>{title}</p>
                <img src={sourcearrow} alt="fleche" className='dropdown_img' />
            </div>
            <div className='dropdown_content' hidden={content}>
                <div className='dropdown_content_space'>{children}</div>
            </div>
        </div>

    )
}

export default Dropdown
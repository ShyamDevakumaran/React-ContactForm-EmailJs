import React from 'react'
import App from '../App'
import './Contact.css'

function Popup(props) {
    let closePop =() =>{
        window.location.reload(false);
    }

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                {props.children}
                <button className='ok-btn' id="pop-btn" onClick={closePop}>ok</button>
            </div>
        </div>
    ) : ""
}

export default Popup
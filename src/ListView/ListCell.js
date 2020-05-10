import React from 'react'
import './ListCell.css';
export default function ListCell({image}) {
    return (
        <div>
            <img src={image.urls.small} className='list_cell' alt={image.alt_description}/>
        </div>
    )
}

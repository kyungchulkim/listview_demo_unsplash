import React from 'react'
import './ListColumn.css';
import ListCell from './ListCell';

export default function ListColumn({data = []}) {

    return (
        <div className='column'>
            {
                data.map((image,index)=>{
                    return(
                        <ListCell image={image} key={index}/>
                    )
                })
            }
        </div>
    )
}

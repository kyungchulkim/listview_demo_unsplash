import React from 'react'
import ListColumn from './ListColumn'
import './Main.css'
import tempdata from './temp.json';
export default function Main() {
    const data = tempdata;
    console.log('data', data);
    return (
        <div className="main">
            <ListColumn />
            <ListColumn />
            <ListColumn />
        </div>
    )
}

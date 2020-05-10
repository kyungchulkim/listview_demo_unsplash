import React, { useState, useEffect } from "react";
import ListColumn from './ListColumn'
import './Main.css'
import tempdata from './temp.json';
export default function Main() {
    let data = tempdata;

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    
    let dealsPage = 0;
    let endPage = 5;
    let infinityStauts = true;
    
    useEffect(() => {  
        data.map((array, index) => {    
            if(index % 3 === 0)
            setData1(data1 => [...data1,array])
            else if(index % 3 === 1)
            setData2(data2 => [...data2,array])
            else
            setData3(data3 => [...data3,array])
        })
    
        const handleScroll = () => {
            const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
      
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
      
          const scrolled = winScroll / height;
 
          if (
            scrolled > 0.6 &&
            infinityStauts === true &&
            dealsPage !== endPage
          ) {
            infinityStauts = false
            dealsPage += 1;
            
            data.map((array, index) => {    
                if(index % 3 === 0)
                setData1(data1 => [...data1,array])
                else if(index % 3 === 1)
                setData2(data2 => [...data2,array])
                else
                setData3(data3 => [...data3,array])
            })
          }
          infinityStauts = true
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
        <div className="main">
            <ListColumn data={data1}/>
            <ListColumn data={data2}/>
            <ListColumn data={data3}/>
        </div>
    )
}

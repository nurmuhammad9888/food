import "./card.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Cards = () => {
  const [data, setData] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:5000/food/1')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <>
      {data.map(el =>(
            <li className='cards'>
                <img className='card-image' src={`http://localhost:5000/${el.image}`} width="149" height="135" alt="Palov" />
                <div className="text-wrapper">
                <h3 className='card-title'>{el.name}</h3>
                <p className='card-text'>$ {el.price}</p>
                <p className='card-texttwo'>{el.bowls} Bowls</p>
                </div>
            </li>
        ))
      }
    </>
  )
}

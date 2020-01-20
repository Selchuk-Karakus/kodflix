import React from 'react';
import { Link } from 'react-router-dom';

export default function TvShowList(props) {
  return ( 
    <Link to={props.id} className='item'>
        <img src={props.banner} alt={`${props.name} 'Movie Banner'`} />
        <div class="overlay">
          <h2>{props.name}</h2>
        </div>
    </Link>
  );
}
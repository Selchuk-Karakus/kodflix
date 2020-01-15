import React from 'react';
import { Link } from 'react-router-dom';

export default function TvShowList(props) {
  return ( 
    <Link to='/details' className='banner-column'>
      <img src={props.banner} alt={`${props.name} 'Movie Banner'`} />
      <div class="overlay">
        <div class="title">
          <h2>{props.name}</h2>
        </div>
      </div>
    </Link>
  );
}
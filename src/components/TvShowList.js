import React from 'react';

export default function TvShowList(props) {
  return ( 
    <div className='banner-column'>
      <img src={props.banner} alt={`${props.name} 'Movie Banner'`} />
      <div class="overlay">
        <div class="title">
          <h2>{props.name}</h2>
        </div>
      </div>
    </div>
  );
}
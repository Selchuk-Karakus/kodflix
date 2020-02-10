import React from 'react';
import TvShowList from '../TvShowList';
import GetGallery from './gallery-get';
import './Gallery.css';

export default function Gallery() {
    return (
      <div>
        <h1 className='main-header'>Kodflix</h1>
        <div className='container'>
          {
            GetGallery().map(movie => (
                <TvShowList 
                  key={movie.id} 
                  id={movie.id} 
                  name={movie.name} 
                  banner={movie.banner} />
            ))
          }  
        </div>
      </div>
    );
  }

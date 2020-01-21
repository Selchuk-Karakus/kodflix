import React from 'react';
import TvShowList from './TvShowList';
import GetGallery from './gallery/gallery-get';

export default function Gallery() {
    return (
      <div>
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

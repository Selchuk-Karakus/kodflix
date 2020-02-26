import React from 'react';
import TvShowList from '../TvShowList';
import './Gallery.css';

export default class Gallery extends React.Component{
    constructor() {
      super();
      this.state = {
        posters: []
      }
    }

    componentDidMount() {
      fetch(`/rest/tvshowlist/`)
      .then(response => response.json())
      .then(data => this.setState({posters: data}))
    }

    render() {
    return (
      <div>
        <h1 className='main-header'>Kodflix</h1>
        <div className='container'>
          {
            this.state.posters.map(movie => (
                <TvShowList 
                  key={movie.id} 
                  id={movie.id} 
                  name={movie.name} 
                  poster={movie.image} />
            ))
          }  
        </div>
      </div>
    );
  }
}

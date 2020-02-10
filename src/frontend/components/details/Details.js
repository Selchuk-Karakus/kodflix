import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery/gallery-get';
import './Details.css';


export default class Details extends React.Component {
    constructor() {
        super();
        this.state= {
            details: {}
        };
    } 

    componentDidMount() {
        let detailsId = this.props.match.params.detailsId;
        let details =getGallery()
            .find((details) => details.id === detailsId);
        this.setState({ details });
    }

    render() {
            return (this.state.details === undefined) ? 
                <Redirect to='notFound'/> :
                <div className='details-container'>
                    <div className='Details'>
                        <h1>{this.state.details.name}</h1>
                        <img 
                            src={this.state.details.banner}
                            alt={this.state.details.name}
                        />
                        <p>{this.state.details.detail}</p>
                        <Link to='/'>Main Menu</Link>
                    </div>
                </div>      
    }
}
  
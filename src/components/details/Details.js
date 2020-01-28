import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../gallery/gallery-get';


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
                <div>
                    <h1>{this.state.details.name}</h1>
                    <Link to='/'>Home</Link>
                </div>      
    }
}
  
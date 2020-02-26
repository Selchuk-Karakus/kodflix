import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
        
       
        fetch(`/rest/tvshowlist/${detailsId}`)
            .then(response => response.json())
            .then(data => this.setState({details: data}))
            
            
    }

    render() {
            return (this.state.details === undefined) ? 
                <Redirect to='notFound'/> :
                <div className='details-container'>
                    <div className='Details'>
                        <h1>{this.state.details.name}</h1>
                        <img 
                            src={`images/${this.state.details.image}`}
                            alt={this.state.details.name}
                        />
                        <p>{this.state.details.detail}</p>
                        <Link to='/'>Main Menu</Link>
                    </div>
                </div>      
    }
}
  
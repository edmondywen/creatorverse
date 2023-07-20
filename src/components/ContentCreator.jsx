import './components.css'
import PropTypes from 'prop-types';
import doodlebob from '../assets/Doodlebob-Guide.png';
import { Link } from 'react-router-dom';

function ContentCreator(props){
    const isValidUrl = urlString=> {
        try { 
            return Boolean(new URL(urlString)); 
        }
        catch(e){ 
            return false; 
        }
    }

    const imageStyle = {'width': '300px', 'height': '300px', 'object-fit': 'cover', 'border-radius': '5%'};

    return (
        <Link to={`view`}>
            <div className='ContentCreator'>
                {isValidUrl(props.imgurl) && <img src={props.imgurl} style={imageStyle}></img>}
                {!isValidUrl(props.imgurl) && <img src={doodlebob} style={imageStyle}></img>}
                <p>name: {props.name}</p>
                <p>url: {props.url}</p>
                <p>description: {props.description}</p>
            </div>
        </Link>
    )
}

export default ContentCreator;
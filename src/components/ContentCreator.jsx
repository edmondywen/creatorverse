import './components.css'
import PropTypes from 'prop-types';
import doodlebob from '../assets/Doodlebob-Guide.png';
import { Link } from 'react-router-dom';
import { isValidUrl } from '../utils';
import { deleteCreator } from "../creators";

function ContentCreator(props){
    // const imageStyle = {'width': '300px', 'height': '300px', 'objectFit': 'cover', 'borderRadius': '50%'};

    return (
        <Link to={`../${props.id}`} className="ContentCreatorLink">
            <div className='ContentCreator'>
                {isValidUrl(props.imgurl) && <img src={props.imgurl}></img>}
                {!isValidUrl(props.imgurl) && <img src={doodlebob}></img>}
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className='buttonContainer'>
                    {/* <Link to={`../${props.id}`}> 
                        See More
                    </Link> */}
                    <Link to={`../edit/${props.id}`} className='cardActionButton'> 
                        Edit
                    </Link>
                    <Link onClick={() => {deleteCreator(props.id)}} className='cardActionButton'>
                        Delete
                    </Link>
                </div>
                {/* use ../ because otherwise id is appended to the path and it won't render properly */}
            </div>
        </Link>
    )
}

export default ContentCreator;
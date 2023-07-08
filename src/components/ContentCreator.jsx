import './components.css'
import PropTypes from 'prop-types';

function ContentCreator(props){
    return (
        <div className='ContentCreator'>
            <p>name: {props.name}</p>
            <p>url: {props.url}</p>
            <p>description: {props.description}</p>
        </div>
    )
}

export default ContentCreator;
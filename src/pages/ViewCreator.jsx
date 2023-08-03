import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import doodlebob from '../assets/Doodlebob-Guide.png';
import { isValidUrl } from '../utils';
import { fetchCreator } from '../creators';
import "../App.css"

function ViewCreator(){
    // react router
    const { id } = useParams()
    const navigate = useNavigate()

    // state variables
    const [ name, setName ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ desc, setDesc ] = useState('')
    const [ imageURL, setImageURL ] = useState('')


    async function setCreatorInfo(id) {
        // only select creators where the id column value is equal to the id from useParams. single returns just a single object instead of a list
        const data = await fetchCreator(id)

        // if fetch fails, navigate to home page
        console.log('id is: ' + id)
        if (data === null){
            alert('creator not found')
            navigate('/', { replace: true })
        }
        
        else {
            setName(data.name)
            setUrl(data.url)
            setDesc(data.description)
            setImageURL(data.imageURL)
            console.log()
        }
    }

    useEffect(() => {setCreatorInfo(id)})
    const imageStyle = {'width': '300px', 'height': '300px', 'objectFit': 'cover', 'borderRadius': '5%'};

    return (
        <div className="ViewCreator">
            {isValidUrl(imageURL) && <img src={imageURL} style={imageStyle}></img>}
            {!isValidUrl(imageURL) && <img src={doodlebob} style={imageStyle}></img>}
            <a href={url} target="_blank" rel="noreferrer"><h2>{name}</h2></a>
            <p>{desc}</p>

            <div className="buttonContainer">
                <a href={url} className="ViewCreatorButton" target="_blank" rel="noreferrer">Learn more about me!</a>
                <b>|</b>
                <Link to={`../edit/${id}`} className="ViewCreatorButton"> 
                    Edit Creator Information
                </Link>
            </div>
        </div>
    )
}

export default ViewCreator;
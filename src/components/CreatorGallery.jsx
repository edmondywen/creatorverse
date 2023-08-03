import './components.css';
import ContentCreator from './ContentCreator';

function CreatorGallery(props){
    return(
        <div className="Gallery">
            {props.creators.map(creator => (
                // eslint-disable-next-line react/jsx-key
                <ContentCreator name={creator.name} url={creator.url} description={creator.description} imgurl={creator.imageURL} id={creator.id} key={creator.id}></ContentCreator>
            ))}
        </div>
    )
}

export default CreatorGallery;
import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCreator } from "../creators";
import { isValidUrl } from "../utils";
import "../App.css";

function EditCreator(){
    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [creatorURL, setCreatorURL] = useState('')
    const [formError, setFormError] = useState(null)

    async function handleSubmit(){
        // Check that there are values 
        if (!name || !description || !creatorURL){
            setFormError("Please fill in all the fields correctly. name is " + name + ' ' + description + ' ' + creatorURL)
            return
        }

        if (!isValidUrl(creatorURL) || (imageURL !== '' && !isValidUrl(imageURL))){
            setFormError("URL is invalid, please fix and try again")
            return
        }

        // Update database with form values. need to have keys 
        const { data, error } = await supabase
            .from('creators')
            .update([{name: name, description: description, url: creatorURL, imageURL: imageURL}])
            .eq('id', id)

        if (error){
            console.log(error)
            setFormError("Fill out forms correctly")
        }
        if (data){
            setFormError(null)
        }
        
        // Return to the creator's page
        navigate(`/${id}`)
    }

    useEffect(() => {
        async function setData(id){
            const data = await fetchCreator(id)
            if (data === null){
                alert('creator not found')
                navigate('/', { replace: true })
            }
            else {
                setName(data.name)
                setCreatorURL(data.url)
                setDescription(data.description)
                setImageURL(data.imageURL)
                console.log()
            }
        }
        setData(id)
    }, [id, navigate])

    return (
        <div>
            <p>Currently editing: {name}</p>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="form-name">name </label>
                <input id="form-name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br></br>

                <label id="form-description">description </label>
                <input id="form-description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <br></br>

                <label id="form-image">creator url </label>
                <input id="form-image" value={creatorURL} onChange={(e) => setCreatorURL(e.target.value)}></input>
                <br></br>

                <label id="form-image">image url </label>
                <input id="form-image" value={imageURL} onChange={(e) => setImageURL(e.target.value)}></input>
            </form>
            <button onClick={handleSubmit}>Save Changes</button>
            {formError && <p className="error">{formError}</p>}
        </div>
    )
}

export default EditCreator;
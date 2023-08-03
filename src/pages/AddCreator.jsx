import { supabase } from "../client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function AddCreator(){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [creatorURL, setCreatorURL] = useState('')
    const [formError, setFormError] = useState(null)
    const navigate = useNavigate()

    async function handleSubmit(){
        // Check that there are values 
        if (!name || !description){
            setFormError("Please fill in all the fields correctly")
            return
        }

        // Update database with form values
        const { data, error } = await supabase
            .from('creators')
            .insert([{name: name, url: creatorURL, description: description, imageURL: imageURL}])
            .select()

        if (error){
            console.log(error)
            setFormError("Fill out forms correctly")
        }
        if (data){
            setFormError(null)
        }
        
        // Reset Values
        setDescription('')
        setCreatorURL('')
        setImageURL('')
        setName('')

        navigate('/')
    }

    return (
        <div className="AddCreator">
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
            <button onClick={handleSubmit}>Submit</button>
            {formError && <p className="error">Uh Oh {formError}</p>}
        </div>
    )
}

export default AddCreator;
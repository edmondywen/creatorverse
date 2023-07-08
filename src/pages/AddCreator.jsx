import { supabase } from "../client";
import { useState } from "react";

function AddCreator(){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const [formError, setFormError] = useState(null)

    async function handleSubmit(e){
        // Check that there are values 
        if (!name || !description || !imageURL){
            setFormError("Please fill in all the fields correctly")
            return
        }

        // Update database with form values
        const { data, error } = await supabase
            .from('creators')
            .insert([{name, description, imageURL}])
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
        setImageURL('')
        setName('')
    }

    // const handleSubmit = async (e) => {
    //     e/preventDefault()

    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="form-name">Name: </label>
                <input id="form-name" value={name} onChange={(e) => setName(e.target.value)}></input>

                <label id="form-description">Description: </label>
                <input id="form-description" value={description} onChange={(e) => setDescription(e.target.value)}></input>

                <label id="form-image">Image URL: </label>
                <input id="form-image" value={imageURL} onChange={(e) => setImageURL(e.target.value)}></input>
            </form>
            <button onClick={handleSubmit}>Submit</button>
            {formError && <p className="error">Uh Oh {formError}</p>}
        </div>
    )
}

export default AddCreator;
import { supabase } from "../client";
import { useState, useEffect } from "react";
import ContentCreator from "../components/ContentCreator";
import CreatorGallery from "../components/CreatorGallery";

function ShowCreators(){
    const [fetchError, setFetchError] = useState(null)
    const [creators, setCreators] = useState(null)

    async function getAllCreators(){
        const { data, error } = await supabase
        .from('creators')
        .select()

        if (error) {
            setFetchError('Could not get creators')
            setCreators(null)
            console.log(error)
        }
        if (data){
            setCreators(data)
            setFetchError(null)
        }
    }

    useEffect(() => {getAllCreators()})

    return (
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {creators && (
                <CreatorGallery creators={creators}></CreatorGallery>
            )}
        </div>

    )
}

export default ShowCreators;
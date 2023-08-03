import { supabase } from "./client"

export async function getAllCreators(){
    const { data, error } = await supabase
    .from('creators')
    .select()

    if (error) {
        return null
    }
    if (data){
        return data
    }
}

export async function fetchCreator(id) {
    // only select creators where the id column value is equal to the id from useParams. single returns just a single object instead of a list
    const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()

    // if fetch fails, navigate to home page
    console.log('id is: ' + id)
    if (error){
        return null;
    }
    
    if (data){
        return data;
    }
}

export async function deleteCreator(id){
    const { data, error } = await supabase 
        .from('creators')
        .delete()
        .eq('id', id)

    if (error){
        console.log(error)
        return 
    }
    if (data){
        console.log(data)
        return data
    }
}
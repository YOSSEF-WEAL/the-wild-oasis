import supabase, { supabaseUrl } from "./supabase";

export async function getCabins()
{
    let { data, error } = await supabase.from('cabins').select('*');
    if (error)
    {
        console.error(error);
        throw new Error('cabins could not be loaded')
    }
    return data;
}

export async function createEditCabin(newCabin, id)
{
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image.name}`.replace('/', '');
    //https://akoaatkzvpnpbmmnczok.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1. Crearte/edit
    let query = supabase.from('cabins');

    // A) CREATE 
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);



    // B) EDIT 
    if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

    const { data, error } = await query.select().single();

    // 2. Upload image
    if (hasImagePath) return data;

    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);

    // 3. Delete the cabin if there was on error uploading image
    if (storageError)
    {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', data.id);

        console.error(storageError);
        throw new Error('cabins image could not be uploaded and the cabin was not created');
    }


    if (error)
    {
        console.error(error);
        throw new Error('cabins could not be Crearted');
    };

    return data;

}

export async function deleteCabins(id)
{

    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);


    if (error)
    {
        console.error(error);
        throw new Error('cabins could not be deleted');
    }
    return data;

}
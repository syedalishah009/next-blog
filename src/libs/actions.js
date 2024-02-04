
// these are called the server actions and user for small applications
// the api actions are in the api folder.

'use server'
import { Post } from "./modals";
import { connectToDb } from "./utils";


export const addPost = async (formData) =>{

    const {title, desc, userId, slug } = Object.fromEntries(formData);

   try {
        connectToDb();
        const newPost = await Post({title, desc, userId, slug})
        await newPost.save();
   } catch (error) {
    console.log(error)
   }
}
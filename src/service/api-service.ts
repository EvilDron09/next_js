import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getUsers = async ():Promise<IUser[]> =>{
    return await fetch(baseUrl +'/users')
        .then(value => value.json())
}

export const getUser = async (id:string):Promise<IUser> =>{
    return await fetch(getUsers + `/${id}`)
        .then(value => value.json())
}

export const getPosts = async ():Promise<IPost[]> =>{
    return await fetch(baseUrl+'/posts')
        .then(value => value.json())
}

export const getPost = async (id:string):Promise<IPost> =>{
    return await fetch(getPosts +`/${id}`)
        .then(value => value.json())
}

export const getComments = async ():Promise<IComment[]> => {
    return await fetch(`${baseUrl}/comments`)
        .then(value => value.json())
}

export const getComment = async (id:string):Promise<IComment> =>{
    return await fetch(`${baseUrl}/comments/${id}`)
        .then(value => value.json())
}

import axios from "axios";
import { useEffect,useState } from "react";
import { BACKENT_URL } from "../config";

export interface Blog{
    "Title": string,
    "Content": string,
    "id": string,
    "authorId": number,
    "author": {
            "Name":string
    }
}
export const useBlogs = ()=>{
    const [Loading,setLoading] = useState(true);
    const [Blogs,setBlogs] = useState<Blog[]>([])

    useEffect( ()=>{
         axios.get(`${BACKENT_URL}/api/v1/blog/bulk`,{headers:{
            Authorization:localStorage.getItem("token")
         }})
         .then((response)=>{
            setBlogs(response.data.allblogs)
            setLoading(false);
        })
         
    },[])
    return {
        Loading,
        Blogs
    }
} 

export const useBlog = ((id:string) =>{
    const [Loading,setLoading] = useState(true);
    const [Blog,setBlog] = useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKENT_URL}/api/v1/blog/${id}`,{headers:{
            Authorization:localStorage.getItem("token")}})
        .then((response)=>{
            setBlog(response.data.blog);
            setLoading(false);
        })
    },[id])
    return ({Blog,Loading})
})
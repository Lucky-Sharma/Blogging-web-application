import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKENT_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const Publisher = ()=>{
    const[Title,setTitle] = useState("");
    const[content,setContent] = useState(""); 
    const navigate = useNavigate();
    return <div >
        <Appbar/>
        <div className="flex justify-center w-full flex-col items-center">
            <div className="w-full max-w-3xl min-w-[200px] p-4">
            <label className="block mb-2 text-sm font-medium text-gray-900
        " >Title: </label>
            <input onChange={(e)=>{setTitle(e.target.value)}} className="w-full bg-slate-300 
             placeholder:text-slate-700 text-slate-700 text-sm border 
             border-slate-200 rounded-md px-2.5 py-2 transition duration-300 ease 
             focus:outline-none focus:border-slate-400 hover:border-slate-300 
             shadow-sm focus:shadow" placeholder="Title...." />
            </div>
            <TextInput onChange={(e)=>{setContent(e.target.value)}}/>
        
            <div>
                <button onClick={async ()=>{
                    const response = await axios.post(`${BACKENT_URL}/api/v1/blog`,
                        {
                        title:Title,
                        content:content,
                        published:true
                        },
                    {
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.id}`)
                }} type="button" className="mt-14 text-white bg-yellow-400
                hover:bg-yellow-500 focus:outline-none focus:ring-4 
                focus:ring-yellow-300 font-medium rounded-full text-sm 
                px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900 "> 
                Publish Post</button>
            </div>
        </div>
    </div>
}

function TextInput({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return <div className=" flex w-full justify-center items-center">
        <form className="max-w-4xl mx-auto w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900
            ">Content: </label>
            <textarea onChange={onChange} rows={6} className="placeholder:text-slate-700 
            block p-2.5 w-full text-sm text-black bg-slate-300 rounded-lg border
            border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Type your text here..."></textarea>
            
            
        </form>

    </div>
}
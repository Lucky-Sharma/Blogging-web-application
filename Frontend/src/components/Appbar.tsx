import { Avatar } from "./BlogCard"
import {Link} from "react-router-dom"

export const Appbar = ()=>{
    return <div className="h-9 flex justify-between px-10 border-solid border-2 border-slate-200 rounded-sm m-1 ">
            <div className="flex items-center">
            <Link to={'/blogs'}>
            &#129008; 
                Bloger
            </Link>
            </div>
        
            <div className="flex items-center">
                <div>
                    <Link to={'/Publisher'}>
                    <button type="button" className="text-white bg-green-700
                    hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 
                    font-medium rounded-full text-sm px-3 py-1 text-center me-2 mb-2 mt-2">
                    Publish</button>
                    </Link>
                    
                </div>
                <div className="">
                <Avatar name={"Taskus"}></Avatar>
                </div>
            
                
            </div>
    </div>
}
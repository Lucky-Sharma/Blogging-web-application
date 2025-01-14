import { Appbar } from "./Appbar"
import {Blog} from "../Hook/useBlog"
import { Avatar } from "./BlogCard"
export const Fullblog = ({blog}:{blog:Blog})=>{
    return <div>
        <Appbar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.Title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        2 feb 2030
                    </div>
                    <div className="pt-4">
                        {blog.Content}
                    </div>
                </div>
                <div className="col-span-4">
                <div className="text-slate-400 text-lg">
                Author:
                </div>
                
                    <div className="flex items-center " >
                        <div className="p-2">
                            <Avatar name={blog.author.Name}></Avatar>
                        </div>
                        <div>
                        
                        <div className="text-xl font-bold">
                        {blog.author.Name}
                    </div>
                        </div>
                    
                    </div>
                    
                     
                </div>

            </div>
        </div>
    </div>
} 
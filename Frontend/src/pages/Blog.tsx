import { useParams } from "react-router-dom";
import { useBlog } from "../Hook/useBlog"
import { Fullblog } from "../components/Fullblog";
import {BlogSkelotan} from "../components/Blogskelaton"
export const Blog = ()=>{
const {id} = useParams();

    const {Loading,Blog} = useBlog(id as string);
    if(Loading || !Blog){
        return <div>
            <BlogSkelotan/>
        </div>
    }
    
    return <div>
        <Fullblog blog={Blog}></Fullblog>
    </div>
}
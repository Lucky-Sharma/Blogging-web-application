import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import {useBlogs} from "../Hook/useBlog"
import {BlogSkelotan} from "../components/Blogskelaton"
export const Blogs = ()=>{
    const {Blogs,Loading} = useBlogs()
    
    if(Loading ){
        return <div>
            <BlogSkelotan/>
        </div>
    }
    return <div> 
        <Appbar></Appbar>
    <div className="flex justify-center">
        <div>
            
            {Blogs.map((blog)=> <BlogCard id={blog.id}
            
            AuthorName={blog.author.Name}
                Title={blog.Title}
                Content={blog.Content}
                PublishDate={"feb 2 2025 "}></BlogCard>
        
            )}
            
            
        </div>
    </div>
    </div>
}

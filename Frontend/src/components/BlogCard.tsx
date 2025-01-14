import {Link} from 'react-router-dom'
interface BlogCardprops{
    AuthorName:string
    Title:string
    Content:string
    PublishDate:string
    id:number|string
}

export const BlogCard = ({id,AuthorName,Title,Content}:BlogCardprops)=>{
    return <Link to={`/blog/${id}`}>
        <div className="border-solid border-2 border-slate-200 p-3 m-3 w-screen max-w-screen-md cursor-pointer">
            <div className="flex items-center pl-2 text-sm ">
                <Avatar name={AuthorName}/> 
        
                <div className="font-extralight pl-2 text-slate-600 flex">
                    {AuthorName} &#9656; <CurrentDate/>
                </div>
        
            </div>
                <div className="font-bold text-xl pl-2">
                    {Title}
                </div>
                <div className="text-lg  pl-3 text-slate-600 ">
                    {Content.slice(0,100)+ "..."}
                </div>
                <div className="text-slate-400 font-thin pl-3 text-sm" >
                    {`${Math.ceil(Content.length/100)} minute(s)`}
                </div>
          
        </div>
        </Link>
}

export function Avatar({name}:{name:String}){
    return <div>
        
<div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>

        </div>
}

function CurrentDate() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    
    return (
      <div>
        <p>Date: {formattedDate}</p>
      </div>
    );
  }
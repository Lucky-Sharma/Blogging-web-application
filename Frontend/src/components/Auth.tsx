import { SignupInput } from "lucky-sharma-common"
import { ChangeEvent, useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import  axios  from "axios"
import {BACKENT_URL} from "../config"

export const Auth = ({type}:{type: "signin"|"signup"} )=>{
    const navigator = useNavigate();
    const [postInputs,setpostInputs] = useState<SignupInput>({
        Name: " ",
        email_id:" ",
        Password:-1
    })

    async function sendRequests(){

        try{
            const request = await axios.post(`${BACKENT_URL}/api/v1/users/${type==='signup'?'signup':'signin'}`,postInputs)
            const jwt = request.data;
            localStorage.setItem("token",jwt);
            navigator('/blog')
        }
        catch(e){
        alert("Not able to signin from frontend");
        
        }
    
    }

    return <div className="h-screen flex justify-center items-center flex-col">
        <div >
            <div className="text-3xl font-extrabold">
            Create an Account           
            </div>
            {/* {JSON.stringify(postInputs)} */}
            <div className="text-slate-500 font-bold">
            {type==="signup"?"already have account ?":"Don't have an account ?" } 
            <Link to={type==="signup"?"/Signin":"/Signup"} className="underline pl-1">
            {type==="signup"?"Signin":"Signup"}</Link>
            </div>
        </div>
        {type==="signup"?<Labelinput label="Name" placeholder="UserName" onChange={(e)=>{
            setpostInputs({
                ...postInputs,
                Name:e.target.value
            })
        }}/>:null}
        

        <Labelinput label="Email" placeholder="Luckysharma@gmail.com" onChange={(e)=>{
            setpostInputs({
                ...postInputs,
                email_id:e.target.value
            })
        }}/>

        <Labelinput label="Password" type="password" placeholder="78438" onChange={(e)=>{
            setpostInputs({
                ...postInputs,
                Password:parseInt(e.target.value)
            })
        }}/>

<button type="button" onClick={sendRequests} className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-36 py-3 me-2 mt-11 mb-4 dark:bg-gray-800 
dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign up":"Sign in"}</button>

    </div>
}
interface labelinputtype{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string
}

function Labelinput({label,placeholder,onChange, type}:labelinputtype){
    return <div className="mb-6">
     <div>
            <label  className="block mb-2 text-sm font-semibold text-gray-900">{label}</label>
            <input type={type||"text"} onChange={onChange} className="font-bold bg-gray-50 border
             border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 px-20  dark:border-gray-700 dark:placeholder-gray-500 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             placeholder={placeholder} required />
        </div>
</div>
}

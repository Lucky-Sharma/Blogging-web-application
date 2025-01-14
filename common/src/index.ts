import z from "zod";

export const signup = z.object({
    Name:z.string(),
    email_id:z.string().email(),
    Password:z.number().min(6)
})



export const signin = z.object({
    username:z.string().email(),
    password:z.string().min(6) 
})



export const createBlogInput = z.object({
    title:z.string(),
    content:z.string()
})



export const updateBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})
export type SignupInput = z.infer<typeof signup>
export type SigninInput = z.infer<typeof signup>
export type CreateBlogInput = z.infer<typeof createBlogInput> 
export type UpdateBlogInput = z.infer<typeof updateBlogInput>


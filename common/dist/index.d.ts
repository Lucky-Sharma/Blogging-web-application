import z from "zod";
declare const signup: z.ZodObject<{
    Name: z.ZodString;
    email_id: z.ZodString;
    Password: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    Name: string;
    email_id: string;
    Password: number;
}, {
    Name: string;
    email_id: string;
    Password: number;
}>;
declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
declare const updateBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: number;
}, {
    title: string;
    content: string;
    id: number;
}>;
export type SignupInput = z.infer<typeof signup>;
export type SignIn = z.infer<typeof signup>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
export {};

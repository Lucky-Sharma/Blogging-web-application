import { Hono } from "hono";
import { userHandler } from "../routes/user";
import { blogHandler } from "../routes/blog";
import {cors} from "hono/cors"
const app = new Hono();
app.use("/*",cors());
app.route("/api/v1/blog",blogHandler);
app.route("/api/v1/users",userHandler)


export default app;

// typescript secreat types generic for hono
// <{
//   Bindings: {
//     DATABASE_URL: string;
//     JWT_SECRET: string;
//   };
// }>
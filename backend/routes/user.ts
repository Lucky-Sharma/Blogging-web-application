import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import {clearDatabase} from "./clear"
export const userHandler=new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userHandler.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
  
    const user = await prisma.user.findUnique({
      
      where:{
        email_id:body.email_id,
        
      } 
    })
    if(!user){
      c.status(404);
      return c.text("User do not exist");
    }
    const token = await sign({id:user.Id},c.env.JWT_SECRET);
    return c.json(token);
});


userHandler.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try{
      const body = await c.req.json();
      const user = await prisma.user.create({
        data: { 
          Name: body.Name, 
          email_id: body.email_id, 
          Password: body.Password },
      });
      
      const token = await sign({ id: user.Id }, c.env.JWT_SECRET);
      console.log(token);
      return c.json(token);
    }
    catch(error){
      c.status(403)
      console.log(error);
      return c.text("Error form signup endpoint");
    }
});

userHandler.post("/clear-database", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const databaseUrl = c.env.DATABASE_URL;

  try {
    await clearDatabase(databaseUrl);
    return c.text("Database cleared successfully");
  } catch (error) {
    //console.error(error.message);
    return c.text("Failed to clear database", 500);
  }
});
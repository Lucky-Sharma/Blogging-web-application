import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const userHandler=new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

export const clearDatabase = async (databaseUrl: string)=> {
    const prisma = new PrismaClient({
        datasourceUrl: databaseUrl,
      }).$extends(withAccelerate());

    try {
        await prisma.post.deleteMany(); 
        await prisma.user.deleteMany(); 
      console.log("Database cleared successfully");
    } catch (error) {
      console.error("Error clearing database:", error);
      throw new Error("Failed to clear database");
    }
  };
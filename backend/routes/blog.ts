import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export const blogHandler = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogHandler.use("/*", async (c, next) => {
  
  try{
    const jwt = c.req.header("Authorization");
    if (!jwt) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
  
    const payload = await verify(jwt, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    console.log(payload);
    c.set("userId", payload.id as string);
    await next();

  }
  catch(e){
    c.status(403);
    return c.text("Unauthorized")
  }
});

blogHandler.get("/bulk", async (c) => {
  
  try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const allblogs = await prisma.post.findMany({
      select:{
        Title:true,
        Content:true,
        id:true,
        authorId:true,
        author:{
          select:{
            Name:true
          }
        }
      }
    });
    //Need a pagination in this place
  
    return c.json({allblogs});
  }
  catch(e){
    c.status(403);
    return c.text("This is error form bulk");
  }
}); 

blogHandler.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const id = c.req.param("id");
    const blog = await prisma.post.findUnique({
      where: {
        id: parseInt(id)
      },
      select:{
        Title:true,
        Content:true,
        author:{
          select:{
            Name:true
          }
        }
      }
    });

    return c.json({ blog });
  } catch (e) {
    c.status(403);
    return c.text("error occure in blogfinding");
  }
});



blogHandler.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const authorId = c.get("userId");
  const blog = await prisma.post.create({
    data: {
      Title: body.title,
      Content: body.content,
      Published: body.published,
      authorId: parseInt(authorId),
    },
  });
  return c.json({ id: blog.id });
});

blogHandler.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
   await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      Title: body.title,
      Content: body.content,
    }
  });
  return c.text("updated!");
  
});

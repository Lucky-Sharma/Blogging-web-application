-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "email_id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Content" TEXT NOT NULL,
    "Published" BOOLEAN NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

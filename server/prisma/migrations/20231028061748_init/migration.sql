-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "Productid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "stock" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("Productid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

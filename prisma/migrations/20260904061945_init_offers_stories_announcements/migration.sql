-- CreateEnum
CREATE TYPE "StoryImageType" AS ENUM ('SQUARE', 'LANDSCAPE');

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitorStory" (
    "id" TEXT NOT NULL,
    "imageType" "StoryImageType" NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "testimonial" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitorStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Offer_order_idx" ON "Offer"("order");

-- CreateIndex
CREATE INDEX "VisitorStory_order_idx" ON "VisitorStory"("order");

-- CreateIndex
CREATE INDEX "Announcement_isActive_order_idx" ON "Announcement"("isActive", "order");

-- CreateTable
CREATE TABLE "GalleryCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GalleryCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryImage" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GalleryImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GalleryImageCategory" (
    "galleryImageId" TEXT NOT NULL,
    "galleryCategoryId" TEXT NOT NULL,

    CONSTRAINT "GalleryImageCategory_pkey" PRIMARY KEY ("galleryImageId","galleryCategoryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "GalleryCategory_name_key" ON "GalleryCategory"("name");

-- CreateIndex
CREATE INDEX "GalleryImage_createdAt_idx" ON "GalleryImage"("createdAt");

-- CreateIndex
CREATE INDEX "GalleryImageCategory_galleryCategoryId_idx" ON "GalleryImageCategory"("galleryCategoryId");

-- AddForeignKey
ALTER TABLE "GalleryImageCategory" ADD CONSTRAINT "GalleryImageCategory_galleryImageId_fkey" FOREIGN KEY ("galleryImageId") REFERENCES "GalleryImage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GalleryImageCategory" ADD CONSTRAINT "GalleryImageCategory_galleryCategoryId_fkey" FOREIGN KEY ("galleryCategoryId") REFERENCES "GalleryCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

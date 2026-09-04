-- CreateTable
CREATE TABLE "VisitorStoryContent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "testimonial" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitorStoryContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitorStoryImage" (
    "id" TEXT NOT NULL,
    "visitorStoryContentId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imageType" "StoryImageType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitorStoryImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VisitorStoryImage_visitorStoryContentId_idx" ON "VisitorStoryImage"("visitorStoryContentId");

-- AddForeignKey
ALTER TABLE "VisitorStoryImage" ADD CONSTRAINT "VisitorStoryImage_visitorStoryContentId_fkey" FOREIGN KEY ("visitorStoryContentId") REFERENCES "VisitorStoryContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Migrate existing VisitorStory rows into VisitorStoryContent, preserving the original id
INSERT INTO "VisitorStoryContent" ("id", "name", "testimonial", "link", "createdAt", "updatedAt")
SELECT "id", "name", "testimonial", "link", "createdAt", "updatedAt" FROM "VisitorStory";

-- Migrate the corresponding image data into VisitorStoryImage, linked to the content row above
INSERT INTO "VisitorStoryImage" ("id", "visitorStoryContentId", "image", "imageType", "createdAt", "updatedAt")
SELECT "id" || '_img', "id", "image", "imageType", "createdAt", "updatedAt" FROM "VisitorStory";

-- DropTable
DROP TABLE "VisitorStory";

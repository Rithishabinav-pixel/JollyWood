-- DropForeignKey
ALTER TABLE "VisitorStoryImage" DROP CONSTRAINT "VisitorStoryImage_visitorStoryContentId_fkey";

-- DropIndex
DROP INDEX "VisitorStoryImage_visitorStoryContentId_idx";

-- AlterTable
ALTER TABLE "VisitorStoryImage" DROP COLUMN "visitorStoryContentId";

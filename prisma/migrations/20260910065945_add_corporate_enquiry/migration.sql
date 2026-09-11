-- CreateTable
CREATE TABLE "CorporateEnquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "location" TEXT,
    "eventType" TEXT,
    "eventDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CorporateEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CorporateEnquiry_createdAt_idx" ON "CorporateEnquiry"("createdAt");

-- CreateTable
CREATE TABLE "Invite" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" INTEGER NOT NULL,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invite_link_key" ON "Invite"("link");

-- CreateIndex
CREATE INDEX "Invite_link_idx" ON "Invite"("link");

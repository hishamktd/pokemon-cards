-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "packsId" INTEGER;

-- CreateTable
CREATE TABLE "Packs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "Packs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_packsId_fkey" FOREIGN KEY ("packsId") REFERENCES "Packs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

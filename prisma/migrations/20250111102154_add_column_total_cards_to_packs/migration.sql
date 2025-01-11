/*
  Warnings:

  - Added the required column `totalCards` to the `Packs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Packs" ADD COLUMN     "totalCards" INTEGER NOT NULL;

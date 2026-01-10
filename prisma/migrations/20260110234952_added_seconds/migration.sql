/*
  Warnings:

  - Added the required column `seconds` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "seconds" DECIMAL(65,30) NOT NULL;

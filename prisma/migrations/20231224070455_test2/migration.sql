/*
  Warnings:

  - You are about to drop the column `Capital` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Hobbies` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Capital",
DROP COLUMN "Hobbies",
ALTER COLUMN "address" DROP NOT NULL;

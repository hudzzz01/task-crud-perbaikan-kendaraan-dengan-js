/*
  Warnings:

  - You are about to drop the column `foto_kendaraan` on the `stnk` table. All the data in the column will be lost.
  - Added the required column `foto_kendaraan` to the `Kendaraan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `kendaraan` ADD COLUMN `foto_kendaraan` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `stnk` DROP COLUMN `foto_kendaraan`;

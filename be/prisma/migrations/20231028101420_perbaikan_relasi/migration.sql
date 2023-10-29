/*
  Warnings:

  - A unique constraint covering the columns `[id_STNK]` on the table `Kendaraan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `file_SPK` to the `Perbaikan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `perbaikan` ADD COLUMN `file_SPK` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Kendaraan_id_STNK_key` ON `Kendaraan`(`id_STNK`);

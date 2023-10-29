/*
  Warnings:

  - Added the required column `id_user_pemberi_perintah` to the `Perbaikan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `perbaikan` DROP FOREIGN KEY `Perbaikan_id_kendaraan_fkey`;

-- AlterTable
ALTER TABLE `perbaikan` ADD COLUMN `id_user_pemberi_perintah` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Perbaikan` ADD CONSTRAINT `Perbaikan_id_kendaraan_fkey` FOREIGN KEY (`id_kendaraan`) REFERENCES `Kendaraan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Perbaikan` ADD CONSTRAINT `Perbaikan_id_user_pemberi_perintah_fkey` FOREIGN KEY (`id_user_pemberi_perintah`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

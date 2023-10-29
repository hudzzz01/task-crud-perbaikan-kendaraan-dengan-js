-- CreateTable
CREATE TABLE `Kendaraan` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_STNK` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perbaikan` (
    `id` VARCHAR(191) NOT NULL,
    `id_kendaraan` VARCHAR(191) NOT NULL,
    `no_spk` VARCHAR(191) NOT NULL,
    `perbaikan` VARCHAR(191) NOT NULL,
    `total` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `STNK` (
    `id` VARCHAR(191) NOT NULL,
    `no_stnk` VARCHAR(191) NOT NULL,
    `nopol` VARCHAR(191) NOT NULL,
    `masa_STNK` VARCHAR(191) NOT NULL,
    `nomor_mesin` VARCHAR(191) NOT NULL,
    `nomor_rangka` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `foto_kendaraan` VARCHAR(191) NOT NULL,
    `foto_stnk` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `STNK_nopol_key`(`nopol`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pembayaran` (
    `id` VARCHAR(191) NOT NULL,
    `no_invoice` VARCHAR(191) NOT NULL,
    `id_perbaikan` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `tanggal_dibuat` VARCHAR(191) NOT NULL,
    `tanggal_jatuh_tempo` VARCHAR(191) NOT NULL,
    `nominal` VARCHAR(191) NOT NULL,
    `status_pembayaran` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Kendaraan` ADD CONSTRAINT `Kendaraan_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kendaraan` ADD CONSTRAINT `Kendaraan_id_STNK_fkey` FOREIGN KEY (`id_STNK`) REFERENCES `STNK`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Perbaikan` ADD CONSTRAINT `Perbaikan_id_kendaraan_fkey` FOREIGN KEY (`id_kendaraan`) REFERENCES `Kendaraan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pembayaran` ADD CONSTRAINT `Pembayaran_id_perbaikan_fkey` FOREIGN KEY (`id_perbaikan`) REFERENCES `Perbaikan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pembayaran` ADD CONSTRAINT `Pembayaran_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

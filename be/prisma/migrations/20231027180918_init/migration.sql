-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `nama_user` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `no_rekening` VARCHAR(191) NOT NULL,
    `nama_rekening` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

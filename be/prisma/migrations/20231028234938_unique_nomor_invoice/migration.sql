/*
  Warnings:

  - A unique constraint covering the columns `[no_invoice]` on the table `Pembayaran` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Pembayaran_no_invoice_key` ON `Pembayaran`(`no_invoice`);

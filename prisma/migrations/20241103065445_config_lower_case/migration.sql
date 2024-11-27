/*
  Warnings:

  - You are about to drop the column `MAIL_HOST` on the `mail_config` table. All the data in the column will be lost.
  - You are about to drop the column `MAIL_PASS` on the `mail_config` table. All the data in the column will be lost.
  - You are about to drop the column `MAIL_PORT` on the `mail_config` table. All the data in the column will be lost.
  - You are about to drop the column `MAIL_USER` on the `mail_config` table. All the data in the column will be lost.
  - Added the required column `host` to the `Mail_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pass` to the `Mail_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Mail_config` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mail_config` DROP COLUMN `MAIL_HOST`,
    DROP COLUMN `MAIL_PASS`,
    DROP COLUMN `MAIL_PORT`,
    DROP COLUMN `MAIL_USER`,
    ADD COLUMN `host` VARCHAR(191) NOT NULL,
    ADD COLUMN `pass` VARCHAR(191) NOT NULL,
    ADD COLUMN `port` INTEGER NOT NULL DEFAULT 465,
    ADD COLUMN `user` VARCHAR(191) NOT NULL;

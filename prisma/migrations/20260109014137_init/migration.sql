-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Char" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "Char_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cord" (
    "id" SERIAL NOT NULL,
    "x_min" DECIMAL(65,30) NOT NULL,
    "x_max" DECIMAL(65,30) NOT NULL,
    "y_min" DECIMAL(65,30) NOT NULL,
    "y_max" DECIMAL(65,30) NOT NULL,
    "char_id" INTEGER NOT NULL,
    "setting_id" INTEGER NOT NULL,

    CONSTRAINT "Cord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "setting_id" INTEGER NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cord" ADD CONSTRAINT "Cord_char_id_fkey" FOREIGN KEY ("char_id") REFERENCES "Char"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cord" ADD CONSTRAINT "Cord_setting_id_fkey" FOREIGN KEY ("setting_id") REFERENCES "Setting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_setting_id_fkey" FOREIGN KEY ("setting_id") REFERENCES "Setting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

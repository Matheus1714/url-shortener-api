import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUrlTable1737861078406 implements MigrationInterface {
    name = 'CreateUrlTable1737861078406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("id" SERIAL NOT NULL, "hash" character varying NOT NULL, "origin_url" character varying NOT NULL, "short_url" character varying NOT NULL, CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
    }

}

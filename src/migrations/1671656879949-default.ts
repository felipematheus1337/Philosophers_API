import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671656879949 implements MigrationInterface {
    name = 'default1671656879949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "philosophers" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "philosophers" DROP COLUMN "description"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class default1671206531044 implements MigrationInterface {
    name = 'default1671206531044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "works" ("id" SERIAL NOT NULL, "name" text NOT NULL, "date" text NOT NULL, "buyUrl" text NOT NULL, "philosopher_id" integer, CONSTRAINT "PK_a9ffbf516ba6e52604b29e5cce0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "philosophers" ("id" SERIAL NOT NULL, "name" text NOT NULL, "birthDate" text NOT NULL, "flag" text, "image" text, "country" text NOT NULL, "typePhilosophy" text NOT NULL, CONSTRAINT "PK_b787135daa78f000777be3f965a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "works" ADD CONSTRAINT "FK_8ed7e9a0c1bd09369e31e9607d3" FOREIGN KEY ("philosopher_id") REFERENCES "philosophers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "works" DROP CONSTRAINT "FK_8ed7e9a0c1bd09369e31e9607d3"`);
        await queryRunner.query(`DROP TABLE "philosophers"`);
        await queryRunner.query(`DROP TABLE "works"`);
    }

}

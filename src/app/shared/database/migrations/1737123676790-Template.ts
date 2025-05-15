import {MigrationInterface, QueryRunner} from "typeorm";

export class Template1737123676790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `
           ALTER TABLE "templates" ADD COLUMN IF NOT EXISTS "file_name" text;
          `,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `
           ALTER TABLE "templates" DROP COLUMN IF NOT EXISTS "file_name";
          `,
        );
    }

}

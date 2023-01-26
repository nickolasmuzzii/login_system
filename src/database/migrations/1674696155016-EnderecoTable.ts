import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateUserTable1674696155016 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "endereco",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "cep",
            type: "varchar",
            length: "255",
            isNullable: false
          },
          {
            name: "rua",
            type: "varchar",
            length: "255",
            isNullable: false
          },
          {
            name: "cidade",
            type: "varchar",
            length: "255",
            isNullable: false
          },
          {
            name: "estado",
            type: "varchar",
            length: "255",
            isNullable: false
          },

        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("endereco")
  }
}

import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserTable1674699483819 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "data_nascimento",
            type: "date",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "endereco_id",
            type: "integer",
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "users",
      new TableForeignKey({
        columnNames: ["endereco_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "endereco",
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }
}

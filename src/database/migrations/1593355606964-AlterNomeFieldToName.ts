import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterNomeFieldToName1593355606964
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'nome');
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'name',
                type: 'varchar',
                isNullable: false,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'name');

        await queryRunner.addColumn(
            'appointments',
            new TableColumn({
                name: 'nome',
                type: 'varchar',
                isNullable: false,
            }),
        );
    }
}

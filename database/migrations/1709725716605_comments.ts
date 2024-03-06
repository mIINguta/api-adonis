import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Comments extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username')
      table.string('text')

      //criamos moment_id na tabela comments para referenciar o id do momento, unsigned diz que a
      //chave primária só pode ser positiva e on delete é para quando o momento for apagado
      //os comentários sejam apagados tbm.
      table.integer("moment_id").unsigned().references("moments.id").onDelete("CASCADE");
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

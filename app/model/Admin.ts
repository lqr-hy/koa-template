import { Column, Model, Table } from "sequelize-typescript"

@Table
class Admin extends Model {
  @Column
  name!: String

  @Column
  email!: String

  @Column
  mobile!: Number
}

export default Admin
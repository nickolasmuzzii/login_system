import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
class UserModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  data_nascimento: string;
  @Column()
  password: string;
  @Column()
  endereco_id: number;
}
export default UserModel;

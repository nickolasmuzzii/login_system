import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity("endereco")
class EnderecoModel {
  @PrimaryGeneratedColumn("increment")
  id:string
  @Column()
  cep: string
  @Column()
  rua:string
  @Column()
  cidade:string
  @Column()
  estado:string
}
export default EnderecoModel

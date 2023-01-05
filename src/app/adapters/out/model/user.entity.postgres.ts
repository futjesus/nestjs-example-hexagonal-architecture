import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
class UserEntityPostgres {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'lastname',
  })
  lastName: string;
}

export { UserEntityPostgres };

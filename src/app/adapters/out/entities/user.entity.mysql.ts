import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
class UserEntityMySQL {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  age: number;
}

export { UserEntityMySQL };

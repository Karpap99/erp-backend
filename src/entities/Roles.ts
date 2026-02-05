import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolesPermission } from './RolesPermissions';
import { User } from './User';

@Entity('Roles', { schema: 'public' })
export class Roles {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => RolesPermission, (rolePermission) => rolePermission.role)
  rolePermissions: RolesPermission[];

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}

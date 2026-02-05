import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyUsers } from './CompanyUsers';
import { StoreUsers } from './StoreUsers';
import { Roles } from './Roles';

@Index('User_email_key', ['email'], { unique: true })
@Entity('User', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'surname' })
  surname: string;

  @Column('varchar', { name: 'phone', nullable: true })
  phone: string | null;

  @Column('varchar', { name: 'email' })
  email: string;

  @Column('varchar', { name: 'password' })
  password: string;

  @Column('varchar', { name: 'avatar', nullable: true })
  avatar: string | null;

  @Column('boolean', { name: 'is_active', default: false })
  isActive: boolean;

  @JoinColumn()
  @ManyToOne(() => Roles, (role) => role.users)
  role: Roles;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date | null;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.user)
  companyUsers: CompanyUsers[];

  @OneToMany(() => StoreUsers, (storeUsers) => storeUsers.user)
  storeUsers: StoreUsers[];
}

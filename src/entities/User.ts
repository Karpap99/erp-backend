import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyUsers } from './CompanyUsers';
import { StoreUsers } from './StoreUsers';

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

  @Column('varchar', { name: 'email', nullable: false })
  email: string | null;

  @Column('varchar', { name: 'password', nullable: false })
  password: string | null;

  @Column('varchar', { name: 'avatar', nullable: true })
  avatar: string | null;

  @Column('boolean', { name: 'is_active', default: false })
  isActive: boolean | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date | null;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.user)
  companyUsers: CompanyUsers[];

  @OneToMany(() => StoreUsers, (storeUsers) => storeUsers.user2)
  storeUsers: StoreUsers[];
}

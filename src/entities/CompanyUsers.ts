import {
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './Company';
import { CompanyRoles } from './CompanyRoles';
import { User } from './User';

@Index('CompanyUsers_company_id_idx', ['company'], {})
@Index('CompanyUsers_role_idx', ['role'], {})
@Index('CompanyUsers_user_id_idx', ['user'], {})
@Index('CompanyUsers_user_id_company_id_idx', ['company', 'user'], {
  unique: true,
})
@Entity('CompanyUsers', { schema: 'public' })
export class CompanyUsers {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Company, (company) => company.companyUsers)
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  company: Company;

  @ManyToOne(() => CompanyRoles, (companyRoles) => companyRoles.companyUsers)
  @JoinColumn([{ name: 'role', referencedColumnName: 'id' }])
  role: CompanyRoles;

  @ManyToOne(() => User, (user) => user.companyUsers)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}

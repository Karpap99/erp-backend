import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyRolePermissions } from './CompanyRolePermissions';
import { CompanyUsers } from './CompanyUsers';

@Entity('CompanyRoles', { schema: 'public' })
export class CompanyRoles {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true })
  description: string | null;

  @OneToMany(
    () => CompanyRolePermissions,
    (companyRolePermissions) => companyRolePermissions.role,
  )
  companyRolePermissions: CompanyRolePermissions[];

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.role)
  companyUsers: CompanyUsers[];
}

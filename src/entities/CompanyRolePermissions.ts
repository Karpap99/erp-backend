import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CompanyPermissions } from './CompanyPermissions';
import { CompanyRoles } from './CompanyRoles';

@Index('CompanyRolePermissions_permission_idx', ['permission'], {})
@Index('CompanyRolePermissions_role_idx', ['role'], {})
@Entity('CompanyRolePermissions', { schema: 'public' })
export class CompanyRolePermissions {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @ManyToOne(
    () => CompanyPermissions,
    (companyPermissions) => companyPermissions.companyRolePermissions,
  )
  @JoinColumn([{ name: 'permission', referencedColumnName: 'id' }])
  permission: CompanyPermissions;

  @ManyToOne(
    () => CompanyRoles,
    (companyRoles) => companyRoles.companyRolePermissions,
  )
  @JoinColumn([{ name: 'role', referencedColumnName: 'id' }])
  role: CompanyRoles;
}

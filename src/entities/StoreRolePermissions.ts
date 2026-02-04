import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StorePermissions } from './StorePermissions';
import { StoreRoles } from './StoreRoles';

@Index('StoreRolePermissions_permission_idx', ['permission'], {})
@Index('StoreRolePermissions_role_idx', ['role'], {})
@Entity('StoreRolePermissions', { schema: 'public' })
export class StoreRolePermissions {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @ManyToOne(
    () => StorePermissions,
    (storePermissions) => storePermissions.storeRolePermissions,
  )
  @JoinColumn([{ name: 'permission', referencedColumnName: 'id' }])
  permission: StorePermissions;

  @ManyToOne(() => StoreRoles, (storeRoles) => storeRoles.storeRolePermissions)
  @JoinColumn([{ name: 'role', referencedColumnName: 'id' }])
  role: StoreRoles;
}

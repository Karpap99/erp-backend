import {
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StoreRoles } from './StoreRoles';
import { Store } from './Store';
import { User } from './User';

@Index('StoreUsers_role_idx', ['role'], {})
@Index('StoreUsers_user_store_id_idx', ['store', 'user'], { unique: true })
@Index('StoreUsers_store_id_idx', ['store'])
@Index('StoreUsers_user_id_idx', ['user'])
@Entity('StoreUsers', { schema: 'public' })
export class StoreUsers {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date | null;

  @ManyToOne(() => StoreRoles, (storeRoles) => storeRoles.storeUsers)
  @JoinColumn([{ name: 'role', referencedColumnName: 'id' }])
  role: StoreRoles;

  @ManyToOne(() => Store, (store) => store.storeUsers)
  @JoinColumn([{ name: 'store_id', referencedColumnName: 'id' }])
  store: Store;

  @ManyToOne(() => User, (user) => user.storeUsers)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  user: User;
}

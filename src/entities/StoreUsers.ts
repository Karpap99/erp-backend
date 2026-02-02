import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StoreRoles } from "./StoreRoles";
import { Store } from "./Store";
import { User } from "./User";

@Index("StoreUsers_role_idx", ["role"], {})
@Index("StoreUsers_user_store_id_idx", ["storeId", "user"], { unique: true })
@Index("StoreUsers_store_id_idx", ["storeId"])
@Index("StoreUsers_user_id_idx", ["user"])
@Entity("StoreUsers", { schema: "public" })
export class StoreUsers {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("uuid", { name: "user", nullable: true })
  user: string | null;

  @Column("uuid", { name: "store_id", nullable: true })
  storeId: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => StoreRoles, (storeRoles) => storeRoles.storeUsers)
  @JoinColumn([{ name: "role", referencedColumnName: "id" }])
  role: StoreRoles;

  @ManyToOne(() => Store, (store) => store.storeUsers)
  @JoinColumn([{ name: "store_id", referencedColumnName: "id" }])
  store: Store;

  @ManyToOne(() => User, (user) => user.storeUsers)
  @JoinColumn([{ name: "user", referencedColumnName: "id" }])
  user2: User;
}

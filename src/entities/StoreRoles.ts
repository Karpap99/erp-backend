import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StoreRolePermissions } from "./StoreRolePermissions";
import { StoreUsers } from "./StoreUsers";

@Entity("StoreRoles", { schema: "public" })
export class StoreRoles {
  @PrimaryGeneratedColumn("increment", { name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(
    () => StoreRolePermissions,
    (storeRolePermissions) => storeRolePermissions.role
  )
  storeRolePermissions: StoreRolePermissions[];

  @OneToMany(() => StoreUsers, (storeUsers) => storeUsers.role)
  storeUsers: StoreUsers[];
}

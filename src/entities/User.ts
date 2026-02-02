import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyUsers } from "./CompanyUsers";
import { StoreUsers } from "./StoreUsers";

@Index("User_email_key", ["email"], { unique: true })
@Entity("User", { schema: "public" })
export class User {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "surname", nullable: true })
  surname: string | null;

  @Column("character varying", { name: "phone", nullable: true })
  phone: string | null;

  @Column("character varying", { name: "email", nullable: false})
  email: string | null;

  @Column("character varying", { name: "password", nullable: false })
  password: string | null;

  @Column("character varying", { name: "avatar", nullable: true })
  avatar: string | null;

  @Column("boolean", { name: "is_active", nullable: true, default: false})
  isActive: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.user)
  companyUsers: CompanyUsers[];

  @OneToMany(() => StoreUsers, (storeUsers) => storeUsers.user2)
  storeUsers: StoreUsers[];
}

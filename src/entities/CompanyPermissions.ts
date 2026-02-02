import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyRolePermissions } from "./CompanyRolePermissions";

@Entity("CompanyPermissions", { schema: "public" })
export class CompanyPermissions {
  @PrimaryGeneratedColumn("increment", { name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @OneToMany(
    () => CompanyRolePermissions,
    (companyRolePermissions) => companyRolePermissions.permission
  )
  companyRolePermissions: CompanyRolePermissions[];
}

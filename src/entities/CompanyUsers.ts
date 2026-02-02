import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company";
import { CompanyRoles } from "./CompanyRoles";
import { User } from "./User";

@Index("CompanyUsers_company_id_idx", ["companyId"], {})
@Index("CompanyUsers_role_idx", ["role"], {})
@Index("CompanyUsers_user_id_idx", ["userId"], {})
@Index("CompanyUsers_user_id_company_id_idx", ["companyId", "userId"], {
  unique: true,
})
@Entity("CompanyUsers", { schema: "public" })
export class CompanyUsers {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("uuid", { name: "user_id", nullable: true })
  userId: string | null;

  @Column("uuid", { name: "company_id", nullable: true })
  companyId: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Company, (company) => company.companyUsers)
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company: Company;

  @ManyToOne(() => CompanyRoles, (companyRoles) => companyRoles.companyUsers)
  @JoinColumn([{ name: "role", referencedColumnName: "id" }])
  role: CompanyRoles;

  @ManyToOne(() => User, (user) => user.companyUsers)
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: User;
}

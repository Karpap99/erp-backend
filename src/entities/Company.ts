import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CompanyUsers } from "./CompanyUsers";
import { Product } from "./Product";
import { Store } from "./Store";

@Entity("Company", { schema: "public" })
export class Company {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.company)
  companyUsers: CompanyUsers[];

  @OneToMany(() => Product, (product) => product.company2)
  products: Product[];

  @OneToMany(() => Store, (store) => store.company)
  stores: Store[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sale } from "./Sale";
import { Company } from "./Company";
import { StoreProduct } from "./StoreProduct";
import { StoreUsers } from "./StoreUsers";

@Index("Store_company_id_idx", ["companyId"], {})
@Entity("Store", { schema: "public" })
export class Store {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("uuid", { name: "company_id", nullable: true })
  companyId: string | null;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("numeric", {
    name: "tax_rate",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  taxRate: string | null;

  @Column("character varying", { name: "address", nullable: true })
  address: string | null;

  @Column("character varying", { name: "country", nullable: true })
  country: string | null;

  @Column("character varying", { name: "city", nullable: true })
  city: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Sale, (sale) => sale.store2)
  sales: Sale[];

  @ManyToOne(() => Company, (company) => company.stores)
  @JoinColumn([{ name: "company_id", referencedColumnName: "id" }])
  company: Company;

  @OneToMany(() => StoreProduct, (storeProduct) => storeProduct.store2)
  storeProducts: StoreProduct[];

  @OneToMany(() => StoreUsers, (storeUsers) => storeUsers.store)
  storeUsers: StoreUsers[];
}

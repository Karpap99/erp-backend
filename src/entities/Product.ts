import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";
import { ProductHistory } from "./ProductHistory";
import { StoreProduct } from "./StoreProduct";

@Index("Product_company_idx", ["company"], {})
@Index("Product_company_sku_idx", ["company", "sku"], { unique: true })
@Entity("Product", { schema: "public" })
export class Product {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("character varying", { name: "sku", nullable: true })
  sku: string | null;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("uuid", { name: "company", nullable: true })
  company: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp without time zone", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Company, (company) => company.products)
  @JoinColumn([{ name: "company", referencedColumnName: "id" }])
  company2: Company;

  @OneToMany(() => ProductHistory, (productHistory) => productHistory.product)
  productHistories: ProductHistory[];

  @OneToMany(() => StoreProduct, (storeProduct) => storeProduct.product2)
  storeProducts: StoreProduct[];
}

import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Index("ProductHistory_product_idx", ["product"], {})
@Entity("ProductHistory", { schema: "public" })
export class ProductHistory {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true })
  name: string | null;

  @Column("character varying", { name: "description", nullable: true })
  description: string | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Product, (product) => product.productHistories)
  @JoinColumn([{ name: "product", referencedColumnName: "id" }])
  product: Product;
}

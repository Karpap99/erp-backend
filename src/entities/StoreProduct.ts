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
import { Product } from "./Product";
import { ProductStatus } from "./ProductStatus";
import { Store } from "./Store";
import { StoreProductHistory } from "./StoreProductHistory";

@Index("StoreProduct_product_idx", ["product"], {})
@Index("StoreProduct_product_store_idx", ["product", "store"], { unique: true })
@Index("StoreProduct_status_idx", ["status"], {})
@Index("StoreProduct_store_idx", ["store"], {})
@Entity("StoreProduct", { schema: "public" })
export class StoreProduct {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("uuid", { name: "product", nullable: true })
  product: string | null;

  @Column("uuid", { name: "store", nullable: true })
  store: string | null;

  @Column("numeric", {
    name: "quantity",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  quantity: string | null;

  @Column("numeric", {
    name: "current_price",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  currentPrice: string | null;

  @Column("character varying", { name: "currency", nullable: true })
  currency: string | null;

  @Column("boolean", { name: "is_active", nullable: true })
  isActive: boolean | null;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Sale, (sale) => sale.storeProduct2)
  sales: Sale[];

  @ManyToOne(() => Product, (product) => product.storeProducts)
  @JoinColumn([{ name: "product", referencedColumnName: "id" }])
  product2: Product;

  @ManyToOne(
    () => ProductStatus,
    (productStatus) => productStatus.storeProducts
  )
  @JoinColumn([{ name: "status", referencedColumnName: "id" }])
  status: ProductStatus;

  @ManyToOne(() => Store, (store) => store.storeProducts)
  @JoinColumn([{ name: "store", referencedColumnName: "id" }])
  store2: Store;

  @OneToMany(
    () => StoreProductHistory,
    (storeProductHistory) => storeProductHistory.storeProduct
  )
  storeProductHistories: StoreProductHistory[];
}

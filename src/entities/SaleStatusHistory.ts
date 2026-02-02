import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./Sale";
import { ProductSaleStatus } from "./ProductSaleStatus";

@Index("SaleStatusHistory_sale_idx", ["sale"], {})
@Index("SaleStatusHistory_status_idx", ["status"], {})
@Entity("SaleStatusHistory", { schema: "public" })
export class SaleStatusHistory {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id: string;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @ManyToOne(() => Sale, (sale) => sale.saleStatusHistories)
  @JoinColumn([{ name: "sale", referencedColumnName: "id" }])
  sale: Sale;

  @ManyToOne(
    () => ProductSaleStatus,
    (productSaleStatus) => productSaleStatus.saleStatusHistories
  )
  @JoinColumn([{ name: "status", referencedColumnName: "id" }])
  status: ProductSaleStatus;
}

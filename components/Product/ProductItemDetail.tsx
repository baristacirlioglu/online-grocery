import { Product } from "@/types";

interface ProductItemDetailProps {
  product: Product;
}

const ProductItemDetail = ({ product }: ProductItemDetailProps) => {
  return (
    <div>
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="mt-2">{product.description}</p>
      <p className="font-bold mt-4">Price: ${product.sellingPrice}</p>
    </div>
  );
};
export default ProductItemDetail;

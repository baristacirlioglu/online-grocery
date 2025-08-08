import { Product } from "@/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="p-2 md:p-4 lg:p-6 flex flex-col items-center justify-center gap-4 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
      <Image
        width={500}
        height={200}
        alt="product image"
        unoptimized
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.images?.url}
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <div className="flex gap-3">
        {product.sellingPrice && <h2>${product.sellingPrice}</h2>}
        <h2 className={product.sellingPrice && "line-through text-gray-400"}>
          ${product.mrp}
        </h2>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button
            variant="outline"
            className="bg-green-600 text-white hover:bg-green-300"
          >
            Add To Cart
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  );
};
export default ProductItem;

"use client";
import React, { useState } from "react";

import { Product } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { LoaderCircle, ShoppingBasket } from "lucide-react";

interface ProductItemDetailProps {
  product: Product;
}

const ProductItemDetail = ({ product }: ProductItemDetailProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = useState(false);
  const [productTotalPrice, setProductTotalPrice] = useState(
    product.sellingPrice ? product.sellingPrice : product.mrp
  );

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black gap-8">
        <Image
          width={500}
          height={200}
          alt="product image"
          unoptimized
          src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.images?.url}
        />

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>

          <div className="flex gap-3">
            {product.sellingPrice && (
              <h2 className="font-bold text-3xl">${product.sellingPrice}</h2>
            )}
            <h2
              className={
                product.sellingPrice &&
                "font-bold text-3xl line-through text-gray-400"
              }
            >
              ${product.mrp}
            </h2>
          </div>
          <h2 className="text-2xl font-bold">
            Quantity ({product.itemQuantityType})
          </h2>

          <div className="flex flex-col items-baseline gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 border bg-slate-200 flex gap-8 items-center px-5">
                <button
                  disabled={quantity == 1}
                  onClick={decrementQuantity}
                  className="text-2xl cursor-pointer"
                >
                  -
                </button>
                <h2>{quantity}</h2>
                <button
                  onClick={incrementQuantity}
                  className="text-2xl cursor-pointer"
                >
                  +
                </button>
              </div>
              <h2>${(quantity * productTotalPrice).toFixed(2)}</h2>
            </div>
            <Button disabled={loading}>
              <ShoppingBasket />
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Add To Cart"
              )}
            </Button>
          </div>
          <h2>
            <span className="font-bold ml-2">Category : </span>
            {product.categories[0].name}
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ProductItemDetail;

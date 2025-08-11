import { getCategories } from "@/actions/getCategories";
import { getProducts } from "@/actions/getProducts";
import { getSlider } from "@/actions/getSlider";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer/Footer";
import ProductList from "@/components/Product/ProductList";
import Slider from "@/components/Slider";
import Image from "next/image";

export default async function Home() {
  const sliderlist = await getSlider();
  const categoriesList = await getCategories();
  const productList = await getProducts();
  return (
    <div className="px-3">
      <Slider sliderList={sliderlist} />
      <Categories categoryList={categoriesList} />
      <ProductList productList={productList} />

      <Image
        src="/delivery.png"
        width={1000}
        height={300}
        alt="Delivery Image"
        className="w-full object-contain mt-10"
      />
    </div>
  );
}

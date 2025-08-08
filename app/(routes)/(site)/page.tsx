import { getCategories } from "@/actions/getCategories";
import { getSlider } from "@/actions/getSlider";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";

export default async function Home() {
  const sliderlist = await getSlider();
  const categoriesList = await getCategories();
  return (
    <div className="px-3">
      <Slider sliderList={sliderlist} />
      <Categories categoryList={categoriesList} />
    </div>
  );
}

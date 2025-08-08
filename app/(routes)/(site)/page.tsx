import { getSlider } from "@/actions/getSlider";
import Slider from "@/components/Slider";

export default async function Home() {
  const sliderlist = await getSlider();
  return (
    <div>
      <Slider sliderList={sliderlist}/>
    </div>
  );
}

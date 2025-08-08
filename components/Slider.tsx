import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

    interface SliderProps {
        sliderList: Slider[];
    }

const Slider = ({ sliderList }: SliderProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList.map((slider, index) => (
            <CarouselItem key={index} >
            <Image
            width={1000}
            height={400}
            alt='slider'
            className="w-full object-cover rounded-xl"
            unoptimized
            src= {process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slider?.url?.url}            
            />
            </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
export default Slider
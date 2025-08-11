import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CategoriesProps {
  categoryList: Category[];
}

const TopCategory = ({ categoryList }: CategoriesProps) => {
  return (
    <div className="">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-8 mt-2">
        {categoryList.map((category, index) => (
          <Link
            href={`/product-category/${category.name}`}
            key={index}
            className="flex flex-col items-center p-3 bg-green-100 cursor-pointer hover:bg-green-500 rounded-xl gap-2 group"
          >
            <Image
              alt="icon"
              width={30}
              height={30}
              unoptimized
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon?.url
              }
            />
            <h2 className="text-green-700 group-hover:text-white">
              {category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default TopCategory;

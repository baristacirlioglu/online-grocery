import { getCategoriesDetail } from "@/actions/getCategoriesDetail";

interface CategoryNamePageprops {
  params: {
    categoryName: string;
  };
}

const CategoryNamePage = async ({ params }: CategoryNamePageprops) => {
  const categoryDetail = await getCategoriesDetail(params.categoryName);
  return (
    <div>
      <h2 className="p-4 bg-green-600 text-white font-bold text-center text-4xl mb-5">
        {params.categoryName}
      </h2>
    </div>
  );
};
export default CategoryNamePage;

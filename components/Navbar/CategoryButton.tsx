import { LayoutGrid } from "lucide-react"

const CategoryButton = () => {
  return (
    <div>
        <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
                <LayoutGrid className="h-5 w-5"/> Category
            </h2>
    </div>
  )
}
export default CategoryButton
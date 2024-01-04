import { Category } from "@/types"
import Link from "next/link"
import { useRouter } from "next/router"

interface CategoriesNavProps {
    categories: Category[]
}

const CategoriesNav = ({ categories }: CategoriesNavProps) => {
    const router = useRouter()
    const { c } = router.query
    return (
        <ul className="flex flex-col md:flex-row justify-between mb-16 md:border-b border-tertiary/20">
            <li className={`pb-4 ${!c && "md:border-b-2 border-primary"}`}>
                <Link
                    href="/news"
                    className={` font-medium ${
                        !c && "text-primary font-semibold"
                    }`}
                >
                    Tất cả
                </Link>
            </li>
            {categories.map((category) => (
                <li
                    key={category.id}
                    className={`pb-4 ${
                        c && category.id === +c && "border-b-2 border-primary"
                    }`}
                >
                    <Link
                        href={`/news?c=${category.id}`}
                        className={` font-medium ${
                            c &&
                            category.id === +c &&
                            "text-primary font-semibold"
                        }`}
                    >
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default CategoriesNav

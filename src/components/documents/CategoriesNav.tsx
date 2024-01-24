import { Category } from "@/types"
import Link from "next/link"
import { useRouter } from "next/router"

interface CategoriesNavProps {
    categories: Category[]
}

const CategoriesNav = ({ categories }: CategoriesNavProps) => {
<<<<<<< HEAD
  const router = useRouter();
  const { c } = router.query;
  return (
    <ul className="flex flex-col md:flex-row justify-between mb-16 md:border-b border-tertiary/20">
      <li className={`pb-4 ${!c && "md:border-b-2 border-primary"}`}>
        <Link
          href="/documents"
          className={` font-medium ${!c && "text-primary font-semibold"}`}
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
            href={`/documents?c=${category.id}`}
            className={` font-medium ${
              c && category.id === +c && "text-primary font-semibold"
            }`}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
=======
    const router = useRouter()
    const { c } = router.query
    return (
        <ul className="flex flex-col md:flex-row justify-between mb-16 md:border-b border-tertiary/20">
            <li className={`pb-4 ${!c && "md:border-b-2 border-primary"}`}>
                <Link
                    href="/documents"
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
                        href={`/documents?c=${category.id}`}
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
>>>>>>> 034865ea6179f2249be9855aca6e310859f65b22

export default CategoriesNav

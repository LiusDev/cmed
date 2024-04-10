import { Category } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import useLang from "@/hooks/useLang";
import { memo, useMemo, type FC } from "react";

interface CategoriesNavProps {
  categories: Category[];
}

const CategoriesNav = memo<CategoriesNavProps>(({ categories }) => {
  const router = useRouter();
  const { c } = router.query;
  const { t, currentLanguage } = useLang();

  const items = useMemo(() => categories.map((category) => (
    <CategoriesNavItem key={category.id} category={category} lang={currentLanguage} c={c} />
  )), [categories, currentLanguage, c])

  return (
    <ul className="flex flex-col md:flex-row justify-between mb-16 md:border-b border-tertiary/20">
      <li className={`pb-4 ${!c && "md:border-b-2 border-primary"}`}>
        <Link
          href="/documents"
          className={` font-medium ${!c && "text-primary font-semibold"}`}
        >
          {t("document.categoriesnav.all")}
        </Link>
      </li>
      {items}
    </ul>
  );
});


const CategoriesNavItem: FC<{
  category: Category
  lang: string
  c?: string | string[]
}> = ({ category, lang, c }) => {
  return <li
    key={category.id}
    className={`pb-4 ${c && category.id === + c && "border-b-2 border-primary"
      }`}
  >
    <Link
      href={`/documents?c=${category.id}`}
      className={` font-medium ${c && category.id === +c && "text-primary font-semibold"
        }`}
    >
      {category[`name${lang}` as keyof typeof category]}
    </Link>
  </li>
}

export default CategoriesNav;

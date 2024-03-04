import {
  Banner,
  CategoriesNav,
  DocumentsList,
  Pagination,
} from "@/components/documents";
import { MainLayout } from "@/components/layout";
import type { Category, Document } from "@/types";
import { instance } from "@/utils";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const DocumentPage = () => {
  const [data, setData] = useState<Document[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();
  const fetchData = async () => {
    try {
      const response = await instance.get(router.asPath);
      const documents: Document[] = response.data || [];
      setData(documents);
      const categories: Category[] =
        (await instance.get("/categories")).data || [];
      setCategories(categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [router.asPath]);

  return (
    <MainLayout title="Tài liệu">
      <Banner />
      <div className="px-10 lg:px-40 pt-20">
        <CategoriesNav categories={categories} />
        <DocumentsList documents={data} />
        <Pagination pageSize={10} />
      </div>
    </MainLayout>
  );
};

export default DocumentPage;

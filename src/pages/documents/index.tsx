import {
  Banner,
  CategoriesNav,
  DocumentsList,
  Pagination,
} from "@/components/documents";
import { MainLayout } from "@/components/layout";
import type { Category, Document } from "@/types";
import { instance } from "@/utils";
import { InferGetStaticPropsType } from "next";

interface DocumentsProps {
  categories: InferGetStaticPropsType<typeof getStaticProps>["categories"];
  documents: InferGetStaticPropsType<typeof getStaticProps>["documents"];
}

const DocumentPage = ({ categories, documents }: DocumentsProps) => {
  return (
    <MainLayout>
      <Banner />
      <div className="px-10 lg:px-40 pt-28">
        <CategoriesNav categories={categories} />
        <DocumentsList documents={documents} />
        <Pagination pageSize={10} />
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const categories: Category[] = (await instance.get("/categories")).data || [];
  const documents: Document[] =
    (await instance.get("/documents?perPage=12")).data || [];
  return {
    props: {
      categories,
      documents,
    },
    revalidate: 30,
  };
};

export default DocumentPage;

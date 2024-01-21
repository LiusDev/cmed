import { BreadCr, Trans } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { Document } from "@/types";
import { formatDate, instance } from "@/utils";
import { GetServerSidePropsContext } from "next";
import parse from "html-react-parser";
import React from "react";
import { useTranslation } from "react-i18next";
import { DocumentItem } from "@/components/documents";
import { Grid } from "@mantine/core";

interface NewsDetailProps {
  documents: Document;
  relatedDocuments: Document[];
}

const DocumentsDetail = ({ documents, relatedDocuments }: NewsDetailProps) => {
  const { t } = useTranslation();

  const breadCrumbsItems = [
    {
      name: t("documents.title"),
      link: "/documents",
    },
    {
      name: documents.category.name,
      link: `/documents?c=${documents.category.id}`,
    },
  ];

  return (
    <MainLayout>
      <div className="container m-auto px-4 mt-28">
        <BreadCr items={breadCrumbsItems} />
        <h1 className="text-2xl md:text-4xl font-bold uppercase mb-4">
          {documents.name}
        </h1>
        <p className="text-sm mb-2">{formatDate(documents.createdAt, " - ")}</p>
        <div className="pb-20 mb-20 border-b border-tertiary/20">
          {parse(documents.description)}
        </div>
        <h2 className="text-xl md:text-3xl uppercase mb-10">
          <Trans text="documents.detail.related" />
        </h2>
        <Grid className="w-full pb-20">
          {relatedDocuments.length > 0 &&
            relatedDocuments.map((item) => (
              <Grid.Col span={3}>
                <DocumentItem key={item.id} document={item} />
              </Grid.Col>
            ))}
        </Grid>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (!context.params || typeof context.params.id !== "string") {
    return {
      notFound: true,
    };
  }
  const { id } = context.params;
  const { data: documents }: { data: Document } = await instance.get(
    `/documents/${id}`
  );
  const { data }: { data: Document[] } = await instance.get(
    `/documents?c=${documents.category.id}&perPage=4`
  );

  const relatedDocuments = data
    .filter((item) => item.id !== documents.id)
    .slice(0, 3);

  return {
    props: {
      documents,
      relatedDocuments,
    },
  };
};

export default DocumentsDetail;

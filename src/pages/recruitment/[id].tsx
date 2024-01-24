import { BreadCr, Trans } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { Recruitment } from "@/types";
import { formatDate, instance } from "@/utils";
import { GetServerSidePropsContext } from "next";
import parse from "html-react-parser";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
interface NewsDetailProps {
  recruitment: Recruitment;
  relatedRecruitment: Recruitment[];
}

const RecruitmentDetail = ({
  recruitment,
  relatedRecruitment,
}: NewsDetailProps) => {
  const { t } = useTranslation();

  const breadCrumbsItems = [
    {
      name: t("recruitment.title"),
      link: "/recruitment",
    },
  ];

  return (
    <MainLayout>
      <div className="container m-auto px-4 mt-28">
        <BreadCr items={breadCrumbsItems} />
        <h1 className="text-2xl md:text-4xl font-bold uppercase mb-4">
          {recruitment.title}
        </h1>
        <p className="text-sm mb-2">
          {formatDate(recruitment.deadline, " - ")}
        </p>
        <div className="pb-20 mb-20 border-b border-tertiary/20">
          {parse(recruitment.content)}
        </div>
        <h2 className="text-xl md:text-3xl uppercase mb-10">
          <Trans text="news.detail.related" />
        </h2>
        <div className="grid md:grid-cols-2 md:gap-2 mb-10">
          {relatedRecruitment.length > 0 &&
            relatedRecruitment.map((item) => (
              <Link
                href={`/recruitment/${item.id}`}
                className={`col-span-1  mb-10`}
              >
                <div>
                  <h1 className="text-xl font-medium text-primary">
                    {item.title}
                  </h1>
                  <div className="text-sm">{item.deadline}</div>
                </div>
              </Link>
            ))}
        </div>
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
  const { data: recruitment }: { data: Recruitment } = await instance.get(
    `/recruitment/${id}`
  );
  const { data }: { data: Recruitment[] } = await instance.get(
    `/recruitment?perPage=4`
  );

  const relatedRecruitment = data
    .filter((item) => item.id !== recruitment.id)
    .slice(0, 3);

  return {
    props: {
      recruitment,
      relatedRecruitment,
    },
  };
};

export default RecruitmentDetail;

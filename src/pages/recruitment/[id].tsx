import { BreadCr, Trans } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { Recruitment } from "@/types";
import { formatDate, instance } from "@/utils";
import { GetServerSidePropsContext } from "next";
import parse from "html-react-parser";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

import dayjs from "dayjs"
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
        <h1 className="text-2xl md:text-4xl font-bold uppercase mb-4 text-[#1B76BB]">
          {recruitment.title}
        </h1>
        <div className="flex flex-row items-baseline gap-[5px]">
          <FaClock className="inline-block text-[#808080]" />
          <p className="text-[20px] line-clamp-[27.24px] mb-2 text-[#808080]">
            {`Ngày hết hạn ${dayjs(recruitment.deadline).format("DD/MM/YYYY HH:mm")}`}
          </p>
        </div>
        <div className="pb-20 pt-11 mb-20 border-b border-tertiary/20">
          {parse(recruitment.content)}
        </div>
        <h2 className="text-[40px] text-[#3E4756] line-clamp-[54.48px] md:text-3xl uppercase mb-[34px]">
          <Trans text="news.detail.related" />
        </h2>
        <div className="grid md:grid-cols-2 md:gap-2 mb-10">
          {relatedRecruitment.length > 0 &&
            relatedRecruitment.map((item) => (
              <Link
                href={`/recruitment/${item.id}`}
                className={`col-span-1  mb-10`}
                key={item.id}
              >
                <div>
                  <h1 className="text-xl font-medium text-primary">
                    {item.title}
                  </h1>
                  <div className="flex flex-row items-baseline gap-[5px]">
                    <FaClock className="inline-block text-[#808080]" />
                    <p className="text-[20px] line-clamp-[27.24px] mb-2 text-[#808080]">
                      {`Ngày hết hạn ${dayjs(recruitment.deadline).format("DD/MM/YYYY HH:mm")}`}
                    </p>
                  </div>
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

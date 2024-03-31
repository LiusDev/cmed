import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, Services, WhyUs } from "@/components/service";
import type { HomeService, News, Service } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { NewsItem } from "@/components/news";
import { Trans } from "@/components/common";
import Services2 from "../../../components/service/Services2";


export async function getServerSideProps() {
  const data = (await instance.get('/homeservices/4')).data
  return {
    props: {
      data: data
    }
  }
}

const ServiceDetail = (props: { data: HomeService }) => {
  console.log(props.data)
  const [news, setNews] = useState<News[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const fetchData = useCallback(() => {
    instance
      .get("/news?perPage=3")
      .then((response) => {
        setNews(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    instance
      .get("/services", {
        params: {
          perPage: 3,
          sortBy: "id",
          order: "asc",
          page: 1
        }
      })
      .then((response) => {
        setServices(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainLayout>
      <Banner title={props.data.name} />
      <Services2 services={props.data.content} />
      <div className="container m-auto px-4 mb-20">
        <h1 className="font-bold text-primary text-3xl text-center py-20">
          <Trans text="services.detail.related" />
        </h1>
        <div className="grid grid-cols-12 gap-8 mb-10 w-full">
          {news.length > 0 &&
            news.map((item) => (
              <NewsItem
                key={item.id}
                news={item}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ServiceDetail;

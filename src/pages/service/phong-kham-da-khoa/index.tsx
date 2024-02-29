import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, Services, WhyUs } from "@/components/service";
import type { News, Service } from "@/types";
import { useEffect, useState } from "react";
import { NewsItem } from "@/components/news";
import { Trans } from "@/components/common";
const ServiceDetail = () => {
  const [news, setNews] = useState<News[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  const fetchData = () => {
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
          perPage: 5,
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
  };

  useEffect(() => {
    fetchData();
  }, [news.length, services.length]);

  return (
    <MainLayout>
      <Banner />
      <Services services={services} />
      <WhyUs />
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

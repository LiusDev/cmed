import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, Services, WhyUs } from "@/components/service";
import type { News, Service } from "@/types";
import { useEffect, useState } from "react";
import { NewsItem } from "@/components/news";
import { Trans } from "@/components/common";
import { useRouter } from "next/router";
import parse from "html-react-parser";
const ServiceDetail = () => {
    const [news, setNews] = useState<News[]>([]);
    const [service, setService] = useState<Service>();
    const router = useRouter();
    const fetchData = () => {
        instance
            .get("/news?perPage=3")
            .then((response) => {
                setNews(response.data || []);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
        const id = router.query.id;
        console.log("id: ", id);
        instance
            .get(`/services/${id}`)
            .then((response) => {
                setService(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

    };

    useEffect(() => {
        fetchData();
    }, [news.length]);

    return (
        <MainLayout>
            <Banner title={service?.name} />
            <div className="flex flex-col lg:flex-row xl:px-60 mt-10 items-center">
                {service && (
                    <>
                        <div className="lg:w-1/2 px-10 pb-20 lg:pb-0  mt-[65px] ">
                            <div className="relative">
                                <img src={service.featuredImage} alt="image" className="lg:w-[80%] lg:h-[80%]" />
                                <img src={service.featuredImage} alt="image" className="hidden lg:block absolute w-[80%] h-auto -top-[45px] -left-[45px] -z-10" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center lg:w-1/2 px-10 space-y-10">
                            <h2 className="text-3xl font-bold text-primary">
                                <Trans text="services.detail.services.title" />
                            </h2>
                            <div className="text-justify">{parse(service.content)}</div>
                        </div>
                    </>
                )}
            </div>
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
            <WhyUs />

        </MainLayout>
    );
};

export default ServiceDetail;

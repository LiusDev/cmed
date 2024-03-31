import { Article, Banner, TabBar, Testimonials, Vision } from "@/components/about";
import Personnel from "@/components/about/Personnel";
import { MainLayout } from "@/components/layout";
import type { About, Staff } from "@/types";
import { instance } from "@/utils";
import { useEffect, useState } from "react";

const AboutPage = (props: { data: About }) => {
  const [staffs, setStaffs] = useState<Staff[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staffs: Staff[] = (await instance.get("/staffs")).data || [];
        setStaffs(staffs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <MainLayout title="Giới thiệu">
      <Banner title={props.data.title1} subtitle={props.data.subtitle} buttonContent1={props.data.featuredButtonTitle} buttonContent2={props.data.featuredButtonTitle2} />
      <TabBar article={props.data.tabTitle1} vision={props.data.tabTitle2} staff={props.data.tabTitle3} />
      <Article articleName={props.data.tabTitle1} title={props.data.title2} content={props.data.content2} />
      <Testimonials author={props.data.quotes1.author} content={props.data.quotes1.content} image={props.data.quotes1.background} />
      <Vision data={props.data.quotes2} />
      <Personnel staffs={staffs} />
    </MainLayout>
  );
};
export async function getServerSideProps() {
  const { data: { content: data } } = await instance.get<{ content: About }>("/setting/item/about/vi");
  return { props: { data } };
}

export default AboutPage;

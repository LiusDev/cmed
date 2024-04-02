import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, WhyUs } from "@/components/service";
import type { HomeService } from "@/types";
import Services2 from "@/components/service/Services2";
import News from "../../news";


export async function getServerSideProps() {
  const data = (await instance.get('/homeservices/4')).data
  return {
    props: {
      data: data
    }
  }
}

const ServiceDetail = (props: { data: HomeService }) => {
  return (
    <MainLayout>
      <Banner title={props.data.name} />
      <Services2 services={props.data.content} />
      <WhyUs />
      <News/>
    </MainLayout>
  );
};

export default ServiceDetail;

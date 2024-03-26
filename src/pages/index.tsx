import {
  Banner,
  Customers,
  Partners,
  Projects,
  Services,
} from "@/components/homepage";
import About from "@/components/homepage/About";
import { MainLayout } from "@/components/layout";
import type { Customer, Partner, Project, Service } from "@/types";
import { doGet, instance } from "@/utils";
import { useEffect, useState } from "react";
const duplicateData = (data: any[]) => {
  data.length <= 4 && (data = [...data, ...data]);
  return data;
}

const Home = ({ banners }: { banners: any }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [_services, _projects, _partners, _customers] = (await Promise.all([instance.get<Service[]>("/services?perPage=3&order=asc&page=0"), instance.get<Project[]>("/projects"), instance.get<Partner[]>("/partners"), instance.get<Customer[]>("/customers")])).map(i => i.data) as [Service[]?, Project[]?, Partner[]?, Customer[]?]
        console.log(JSON.stringify(_services))
        if (_services)
          setServices(duplicateData(_services));
        if (_projects)
          setProjects(duplicateData(_projects));
        if (_partners)
          setPartners(duplicateData(_partners));
        if (_customers)
          setCustomers(duplicateData(_customers));

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <MainLayout
      title="Home"
    >
      <Banner banners={banners} />
      <Services services={services} />
      <Projects projects={projects} />
      <About />
      <Partners partners={partners} />
      <Customers customers={customers} />
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const banners = (await doGet("/banners")).data
  return {
    props: {
      banners
    }
  }
}

export default Home;

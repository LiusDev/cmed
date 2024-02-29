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
import { instance } from "@/utils";
import { useEffect, useState } from "react";

const Home = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const services: Service[] = (await instance.get("/services")).data || [];
        const projects: Project[] = (await instance.get("/projects")).data;
        const partners: Partner[] =
          (await instance.get("/partners")).data || [];
        const customers: Customer[] =
          (await instance.get("/customers")).data || [];

        setServices(services);
        setProjects(projects);
        setPartners(partners);
        setCustomers(customers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <MainLayout>
      <Banner />
      <Services services={services} />
      <Projects projects={projects} />
      <About />
      <Partners partners={partners} />
      <Customers customers={customers} />
    </MainLayout>
  );
};

export default Home;

import { MainLayout } from "@/components/layout";
import {
  ProjectCard,
  ProjectDetailBanner,
  ProjectDetailCarousel,
} from "@/components/project";
import { Project } from "@/types";
import { instance } from "@/utils";
import parse from "html-react-parser";
import { Trans } from "@/components/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const ProjectDetail = () => {
  const [project, setProject] = useState<Project>();
  const [otherProjects, setOtherProjects] = useState<Project[]>([]);
  const router = useRouter();
  const fetchData = async () => {
    try {
      const id = router.query.id;
      const { data: project }: { data: Project } = await instance.get(
        `/projects/${id}`
      );
      setProject(project);
      const { data }: { data: Project[] } =
        await instance.get(`/projects?perPage=4`);
      const otherProjects = data
        .filter((item) => item.id !== project.id)
        .slice(0, 3);
      setOtherProjects(otherProjects);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [router.asPath]);

  if (!project) {
    return <div>Loading...</div>;
  }
  return (
    <MainLayout>
      <ProjectDetailBanner project={project} />

      <div className="container m-auto px-4 mt-28">
        <div className="border-b border-tertiary/20 mb-20">
          <div className="pb-20 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 px-5 mb-10 md:mb-0">
              <img src={project.featuredImage} alt="project-image" />
            </div>
            <div className="w-full md:w-1/2 px-5">
              <h1 className="text-xl font-bold capitalize mb-4">
                <span className="text-primary">1.</span>{" "}
                <Trans text="project.detail.title" />
              </h1>
              <div>{parse(project.content)}</div>
            </div>
          </div>

          <h2 className="text-xl font-bold capitalize mb-4 text-center">
            <span className="text-primary">2.</span>{" "}
            <Trans text="project.detail.images" />
          </h2>
          <ProjectDetailCarousel project={project} />
        </div>

        <h2 className="text-xl font-bold capitalize mb-4">
          <span className="text-primary">3.</span>{" "}
          <Trans text="project.detail.other" />
        </h2>
        <div className="grid grid-cols-12 gap-8 mb-10">
          {otherProjects.length > 0 &&
            otherProjects.map((item) => (
              <ProjectCard
                key={item.id}
                project={item}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;

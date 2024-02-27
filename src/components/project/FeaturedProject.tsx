import { Project } from "@/types";
import { Button, Trans } from "../common";
import { useState, useEffect } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface FeaturedProjectProps {
  projects: Project[];
}

const ProjectBanner = ({
  project,
  handleChangeProject,
}: {
  project: Project;
  handleChangeProject: (...param: any) => void;
}) => {
  return (
    <div
      className={`bg-no-repeat bg-center bg-cover grid grid-cols-12 relative`}
      style={{
        backgroundImage: `url(${project.featuredImage})`,
      }}
    >
      <div className="h-[600px] col-span-12 md:col-span-6 lg:col-span-5 bg-primary/50 py-40 px-4 lg:px-20 transition-all">
        <div className="text-secondary">
          <p className="mb-12 text-3xl font-light">
            <Trans text="project.featured" />
          </p>
          <h1 className="text-5xl font-bold mb-12 line-clamp-3">
            {project.name}
          </h1>
          <Button
            variant="outline"
            className="border border-secondary-dark text-secondary-dark w-fit"
            href={`/projects/${project.id}`}
          >
            <Trans text="common.viewMore" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 right-12 flex items-center justify-center">
        <Button
          type="square"
          className="w-12 h-12 p-2"
          onClick={() => handleChangeProject("prev")}
        >
          <MdArrowBack className="text-2xl" />
        </Button>
        <Button
          type="square"
          variant="secondary"
          className=" w-12 h-12 p-2"
          onClick={() => handleChangeProject("next")}
        >
          <MdArrowForward className="text-2xl" />
        </Button>
      </div>
    </div>
  );
};

const FeaturedProject = ({ projects }: FeaturedProjectProps) => {
  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);
  const handleChangeProject = (direction: "next" | "prev") => {
    const currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    if (direction === "next") {
      if (currentIndex === projects.length - 1) {
        setCurrentProject(projects[0]);
      } else {
        setCurrentProject(projects[currentIndex + 1]);
      }
    } else {
      if (currentIndex === 0) {
        setCurrentProject(projects[projects.length - 1]);
      } else {
        setCurrentProject(projects[currentIndex - 1]);
      }
    }
  };
  useEffect(() => {
    setCurrentProject(projects[0]);
  }, [projects]);
  if (!currentProject) {
    return <div>Loading...</div>;
  }
  return (
    <section>
      <ProjectBanner
        project={currentProject}
        handleChangeProject={handleChangeProject}
      />
    </section>
  );
};

export default FeaturedProject;

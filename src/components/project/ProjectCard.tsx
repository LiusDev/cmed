import { Project } from "@/types";
import { useRouter } from "next/router";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className = "" }: ProjectCardProps) => {
  const router = useRouter();
  return (
    <article
      className={` h-96 bg-cover bg-center col-span-6 md:col-span-3 lg:col-span-2 cursor-pointer ${className}`}
      style={{
        backgroundImage: `url(${project.featuredImage})`,
      }}
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <div className="w-full h-full bg-tertiary-dark/30 flex items-end">
        <div className="flex flex-col gap-4 p-8">
          <p className="line-clamp-1 border-b border-secondary text-secondary">
            {project.name}
          </p>
          <h4 className="text-secondary text-lg font-medium line-clamp-2">
            {project.description}
          </h4>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

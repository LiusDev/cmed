import { Project } from "@/types";
import { useRouter } from "next/router";
import type { FC } from "react";

interface ProjectCardProps {
  project: Project;
  className?: string;
  index: number
  lang: string
}

const ProjectCard: FC<ProjectCardProps> = ({ project, lang, className = "", index }) => {
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
          <div className="flex flex-row items-center">
            <span className="font-semibold text-[32px] line-clamp-1 text-[white]">{index + 1}.</span>
            <p className="border-b border-secondary text-secondary">
              {project[`name${lang}` as keyof typeof project]}
            </p>
          </div>
          <h4 className="text-secondary text-lg font-medium line-clamp-2">
            {project[`description${lang}` as keyof typeof project]}
          </h4>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

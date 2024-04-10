import { Project } from "@/types";
import { Trans } from "../common";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState, type FC } from "react";
import { instance } from "@/utils";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

interface OtherProjectProps {
  projects: Project[];
  pageSize: number;
}

const OtherProject: FC<OtherProjectProps> = ({ projects, pageSize }) => {
  const router = useRouter();
  const { name, page } = router.query;

  const { i18n } = useTranslation()
  const currentLang = useMemo(() => {
    switch (i18n.language) {
      default: return ""
      case "en": return "EN"
      case "jp": return "JP"
    }
  }, [i18n.language])

  const [data, setData] = useState<Project[]>(projects);

  const handleGetItems = useCallback(async () => {
    const { data: fetchProjects } = await instance.get(
      `/projects?perPage=${pageSize}&page=${page || 1}${name ? `&name=${name}` : ""
      }`
    );
    setData(fetchProjects);
  }, [pageSize, page, name]);

  useEffect(() => {
    handleGetItems();
  }, [page, name]);

  const items = useMemo(() => data.map((project, index) => (
    <ProjectCard lang={currentLang} key={project.id} project={project} index={index} />
  )), [data, currentLang])

  if (!data || data.length === 0) return <></>;

  return (
    <section className="container m-auto px-4 my-16">
      <h3 className="mb-10 text-2xl">
        <Trans text="project.detail.other" />
      </h3>
      <div className="grid grid-cols-6 gap-8">
        {items}
      </div>
    </section>
  );
};

export default OtherProject;

import { Project } from "@/types";

const ProjectDetailBanner = ({ project, lang }: { project: Project, lang: string }) => {
  return (
    <section className="mt-16" style={{
      backgroundImage: `url(${project.featuredImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>

      <div className="container w-screen mx-auto">
        <div className="lg:w-1/2 col-span-12 md:col-span-6 lg:col-span-5 flex items-center justify-center py-40 px-4 transition-all relative ">
          <div className="absolute w-screen h-full bg-primary/50 lg:right-0 z-10" />
          <div className="text-secondary z-20">
            <h2 className="font-[500] text-[27px] line-camp-[36.77px] pb-[30px]">{project[`subtitle${lang}` as keyof Project]}</h2>
            <h1 className="font-bold text-[70px] line-clamp-[95.34px]">{project[`name${lang}` as keyof Project]}</h1>
            <p className="mb-12 text-[17px] line-camp-[30px] pt-[56px]">{project[`description${lang}` as keyof Project]}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetailBanner;

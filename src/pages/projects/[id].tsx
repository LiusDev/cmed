import { MainLayout } from '@/components/layout';
import {
  ProjectCard,
  ProjectDetailBanner,
  ProjectDetailCarousel,
} from '@/components/project';
import { Project } from '@/types';
import { instance } from '@/utils';
import parse from 'html-react-parser';
import { Trans } from '@/components/common';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
    } catch (error) { }
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

      <div className='container m-auto mt-28 px-4'>
        <div className='mb-20 border-b border-tertiary/20'>
          <div className='flex flex-col items-center pb-20 md:flex-row'>
            <div className='mb-10 w-full px-5 md:mb-0 md:w-1/2'>
              <img src={project.featuredImage} alt='project-image' />
            </div>
            <div className='w-full px-5 md:w-1/2'>
              <h1 className='mb-4 text-xl font-bold capitalize'>
                <span className='text-primary'>1.</span>{' '}
                <Trans text='project.detail.title' />
              </h1>
              <div>{parse(project.content)}</div>
            </div>
          </div>

          <h2 className='mb-4 text-center text-xl font-bold capitalize'>
            <span className='text-primary'>2.</span>{' '}
            <Trans text='project.detail.images' />
          </h2>
          <ProjectDetailCarousel project={project} />
        </div>

        <h2 className='mb-4 text-xl font-bold capitalize'>
          <span className='text-primary'>3.</span>{' '}
          <Trans text='project.detail.other' />
        </h2>
        <div className='mb-10 grid grid-cols-12 gap-8'>
          {otherProjects.length > 0 &&
            otherProjects.map((item) => (
              <ProjectCard
                key={item.id}
                project={item}
                className='col-span-12 sm:col-span-6 lg:col-span-4'
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectDetail;

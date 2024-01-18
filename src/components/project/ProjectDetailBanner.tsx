import { Project } from "@/types"

const ProjectDetailBanner = ({ project }: { project: Project }) => {
    return (
        <section className="mt-16">
            <div
                className="bg-no-repeat bg-center bg-cover grid grid-cols-12"
                style={{
                    backgroundImage: `url(${project.featuredImage})`,
                }}
            >
                <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-primary/50 flex items-center justify-center py-40 px-4 lg:px-20 transition-all">
                    <div className="text-secondary">
                        <h1 className="text-7xl font-bold mb-12">
                            {project.name}
                        </h1>
                        <p className="mb-12 text-lg font-light">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDetailBanner

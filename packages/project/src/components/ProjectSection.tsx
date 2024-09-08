import { ProjectList } from "./ProjectList";

export const ProjectSection = () => {
  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-center">Projects</h1>
      <h4 className="text-center text-accent300">
        Below are some of the projects I have worked on or are currently working
        on. They range across disciplines - from web applications, to mobile
        apps, to data scripts.
      </h4>
      <ProjectList />
    </div>
  );
};

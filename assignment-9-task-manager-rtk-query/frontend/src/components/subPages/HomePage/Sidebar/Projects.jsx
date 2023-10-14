import { Error } from '@components/reusable';
import { toggleSelected } from '@rtk/features/filters/filtersSlice';
import { useGetProjectsQuery } from '@rtk/features/projects/projectsApi';
import { useDispatch, useSelector } from 'react-redux';
import Project from './Project';

export default function Projects() {
  const { data: projects, isLoading, isError, error } = useGetProjectsQuery();
  const { selected } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleChange = (projectName) => {
    dispatch(toggleSelected(projectName));
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message={error} />;
  }
  if (!isLoading && !isError && projects?.length === 0) {
    content = <Error message="No projects found" />;
  }
  if (!isLoading && !isError && projects?.length > 0) {
    content = (
      <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">
          {projects?.map((project) => (
            <Project
              key={project?.id}
              label={project?.projectName}
              color={project?.colorClass}
              checked={selected?.includes(project?.projectName)}
              onChange={() => handleChange(project?.projectName)}
            />
          ))}
        </div>
      </div>
    );
  }
  return content;
}

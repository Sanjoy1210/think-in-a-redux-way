import { Error, FormSelect, FormSubmitBtn } from '@components/reusable';
import FormInput from '@components/reusable/FormInput';
import { useGetProjectsQuery } from '@rtk/features/projects/projectsApi';
import { useAddTaskMutation } from '@rtk/features/tasks/tasksApi';
import { useGetTeamMembersQuery } from '@rtk/features/team/teamApi';
import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const reducer = (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

export default function AddTaskPage() {
  const initialValues = {
    taskName: '',
    teamMember: {},
    project: {},
    deadline: '',
  };
  const [values, setValues] = useReducer(reducer, initialValues);
  const { data: teamMembers } = useGetTeamMembersQuery();
  const { data: projects } = useGetProjectsQuery();
  const [addTask, { isLoading, isError, error, isSuccess }] =
    useAddTaskMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'teamMember') {
      value = teamMembers?.find((member) => member?.id == value);
    }
    if (name === 'project') {
      value = projects?.find((project) => project?.id == value);
    }

    setValues({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...values, status: 'pending' });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  return (
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
      <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
        Create Task for Your Team
      </h1>

      <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <FormInput
            label="Task Name"
            id="lws-taskName"
            name="taskName"
            placeholder="Implement RTK Query"
            value={values.taskName}
            onChange={handleChange}
          />

          <FormSelect
            name="teamMember"
            id="lws-teamMember"
            label="Assign To"
            value={values.teamMember?.id}
            onChange={handleChange}
          >
            <>
              <option value="" hidden>
                Assign member
              </option>
              {teamMembers?.map((member) => (
                <option key={member?.id} value={member?.id}>
                  {member?.name}
                </option>
              ))}
            </>
          </FormSelect>

          <FormSelect
            id="lws-projectName"
            name="project"
            label="Project Name"
            value={values.project?.id}
            onChange={handleChange}
          >
            <>
              <option value="" hidden>
                Select Project
              </option>
              {projects?.map((project) => (
                <option key={project?.id} value={project?.id}>
                  {project?.projectName}
                </option>
              ))}
            </>
          </FormSelect>

          <FormInput
            type="date"
            name="deadline"
            id="lws-deadline"
            label="Deadline"
            value={values.deadline}
            onChange={handleChange}
          />

          <FormSubmitBtn text="Save" disabled={isLoading} />

          {isError && <Error message={error} />}
        </form>
      </div>
    </main>
  );
}

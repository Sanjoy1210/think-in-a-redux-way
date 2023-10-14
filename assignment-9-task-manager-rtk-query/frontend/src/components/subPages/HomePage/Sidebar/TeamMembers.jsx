import { Error } from '@components/reusable';
import { useGetTeamMembersQuery } from '@rtk/features/team/teamApi';
import Member from './Member';

export default function TeamMembers() {
  const {
    data: teamMembers,
    isLoading,
    isError,
    error,
  } = useGetTeamMembersQuery();

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message={error} />;
  }
  if (!isLoading && !isError && teamMembers?.length === 0) {
    content = <Error message="No team member found" />;
  }
  if (!isLoading && !isError && teamMembers?.length > 0) {
    content = (
      <div className="mt-8">
        <h3 className="text-xl font-bold">Team Members</h3>
        <div className="mt-3 space-y-4">
          {teamMembers?.map((member) => (
            <Member key={member?.id} name={member?.name} src={member?.avatar} />
          ))}
        </div>
      </div>
    );
  }

  return content;
}

import Projects from './Projects';
import TeamMembers from './TeamMembers';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Projects List */}
      <Projects />

      {/* Team Members */}
      <TeamMembers />
    </div>
  );
}

import Button from "./Button";

export default function Sidebar({
  projects,
  onAddProject,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let selectBtnStyle =
            "w-full px-2 py-1 my-1 text-left rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            selectBtnStyle += " bg-stone-800 text-stone-200";
          } else {
            selectBtnStyle += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={selectBtnStyle}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
